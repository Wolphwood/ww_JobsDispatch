let NotificationContainer = document.querySelector('.notifications-container');

let queue = {};
let prepared = {};
let notifications = {};


function getRemainingPlace() {
    let container_bottom = NotificationContainer.getBoundingClientRect().bottom;
    let heigts = Object.keys(notifications).filter(key => !notifications[key].notification.isClosed()).map(key => Math.max(notifications[key].notification.getHeight(), notifications[key].height));

    return container_bottom - heigts.reduce((acc, cu) => acc + cu, 0);
}

let queueprocessing = false;
async function UpdateQueue() {
    if (queueprocessing) return;
    queueprocessing = true;

    while (Object.keys( queue ).length > 0) {
        let remainPlace = getRemainingPlace();

        let uuid = Object.keys(queue)[0];
        
        let { height } = notifications[uuid].notification.elements.notification.getBoundingClientRect();

        if (remainPlace > height * 2) {
            await ShowNotification(uuid);
        } else {
            let now = new Date().getTime();
            let remain = Object.keys(notifications)
                .filter(uuid => notifications[uuid].timestamp !== null)
                .map(uuid => notifications[uuid].notification.data.duration - (now - notifications[uuid].timestamp)).sort((a,b) => a-b)
                .shift()
            ;

            await Wait(Math.max(1, remain + 200));
        }
    }

    queueprocessing = false;
}

async function ShowNotification(uuid) {
    if (!notifications[uuid]) return;

    let { notification } = notifications[uuid];

    notifications[uuid].timestamp = new Date().getTime();
    if (!notification.data.eternal ?? true) {
        notifications[uuid].timeout = setTimeout(() => { RemoveNotification(uuid); }, notification.data.duration ?? 3000);
    }

    notification.show();

    await Wait(GetElementTransitionDurationInMilliseconds(notification.elements.container) * 1.5);

    RemoveFromQueue(uuid);
}

function PrepareData(data) {
    let uuid = generateUUID(Object.keys(notifications));
    prepared[uuid] = data;

    return uuid;
}

function AddToQueue(data) {
    let uuid = generateUUID(Object.keys(notifications));
    queue[uuid] = data;

    CreateNotification(uuid);
    UpdateQueue();

    return uuid;
}

async function RemoveFromQueue(uuid) {
    if (!queue[uuid]) return;
    delete queue[uuid];
}


function CreateNotification(uuid) {
    if (!queue[uuid] && !prepared[uuid]) return;

    // Create notification & Instantiate it
    let data = queue[uuid] ?? prepared[uuid];
    let notification = new NotificationHTML(data);
    NotificationContainer.prepend(notification.build());
    
    let timeout = null;
    let timestamp = null;
    let height = notification.getHeight();

    delete prepared[uuid];
    
    return notifications[uuid] = {
        uuid, notification, timestamp, timeout, height
    };
}

async function HideNotification(uuid) {
    if (!notifications[uuid]) return;

    let { notification } = notifications[uuid];
    let { container } = notification.elements;

    notification.hide();

    return Wait(GetElementTransitionDurationInMilliseconds(container));
}

async function RemoveNotification(uuid) {
    if (!notifications[uuid]) return;

    await HideNotification(uuid);

    notifications[uuid].notification.remove();

    delete notifications[uuid];
}

function RespondToNUI(id, data) {
    fetch(`https://ww_JobsDispatch/ww_JobsDispatch:nuiResponse_${id}`, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

window.addEventListener('message', event => {
    let { data } = event;
    let { type, content, uuid, request_id } = data;

    console.log(JSON.stringify(data), null, 2)

    let nuid;
    switch (type.toUpperCase().replace(/[\s-_]/g, '')) {
        case 'PREPARE':
            nuid = PrepareData(content);
            RespondToNUI(request_id, nuid);
        break;

        case 'ADDTOQUEUE':
        case 'QUEUE':
            nuid = AddToQueue(content);
            RespondToNUI(request_id, nuid);
        break;
        
        case 'SHOW':
            if (!notifications[uuid]) CreateNotification(uuid);
            ShowNotification(uuid);
        break;
        
        case 'HIDE':
            HideNotification(uuid);
        break;

        case 'REMOVE':
            RemoveNotification(uuid);
        break;
        
        case 'FORCE':
            nuid = PrepareData(content);
            CreateNotification(nuid);
            ShowNotification(nuid);
            RespondToNUI(request_id, nuid);
        break;

        default:
            console.error(`[JobsDispatch] Unknown action '${type}'`);
    }
});