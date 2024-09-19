function RequestNewNotification(data)
    local promise = promise.new()
    local requestId = uuid()

    RegisterNUICallback('ww_JobsDispatch:nuiResponse_' .. requestId, function(data, cb)
        promise:resolve(data)
        cb(1)
    end)

    SendNUIMessage({
        type = 'PREPARE',
        content = data,
        request_id = requestId
    });

    return Citizen.Await(promise)
end

function RequestForceNotification(data)
    local promise = promise.new()
    local requestId = uuid()

    RegisterNUICallback('ww_JobsDispatch:nuiResponse_' .. requestId, function(data, cb)
        promise:resolve(data)
        cb(1)
    end)

    SendNUIMessage({
        type = 'FORCE',
        content = data,
        request_id = requestId
    });

    return Citizen.Await(promise)
end

function ShowNotification(uuid)
    SendNUIMessage({
        type = 'SHOW',
        uuid = uuid
    })
end

function HideNotification(uuid)
    SendNUIMessage({
        type = 'HIDE',
        uuid = uuid
    })
end







Citizen.CreateThread(function()

    local notification = Notification:new()
    notification:setTitle('Salut'):setTitleIcon('fa-regular fa-clock'):setTitleFontColor('cyan'):setTitleBackgroundColor('indigo')

    
    notification:setTitleBadges({
        {
            content = "AAAA",
            font = "red",
            color = "indigo"
        }
    })

    notification:addTitleBadge({
        content = "CCCC",
        font = "blue",
        color = "black"
    })

    notification:editTitleBadge(2, {
        content = "BBBBBBBB",
        font = "white",
        color = "lightgreen"
    })
    

    notification:setContentLines({
        {
            content = "AAAA",
            font = "red",
            color = "indigo"
        },
        {
            content = "AAAA",
            font = "red",
            color = "indigo"
        },
        {
            content = "AAAA",
            font = "red",
            color = "indigo"
        },
        {
            content = "AAAA",
            font = "red",
            color = "indigo"
        },
        {
            content = "AAAA",
            font = "red",
            color = "indigo"
        },
        {
            content = "AAAA",
            font = "red",
            color = "indigo"
        },
    })

    notification:removeAllContentLines():setContentLines({
        {
            content = "AAAA",
            font = "red",
            color = "indigo"
        },
    })

    notification:addContentLine({
        content = "CCCC",
        font = "blue",
        color = "black"
    })

    notification:editContentLine(2, {
        content = "BBBBBBBB",
        font = "white",
        color = "lightgreen",
        icon = "fa-regular fa-image"
    })

    notification:editContentLine(1, {
        icon = "fa-regular fa-image"
    })

    notification:setRespondContent("[Z] Salut!"):setRespondColor('red'):setFontColorContent('black')
    
    notification:apply('{"respond":{"content":"[Z] Salut!","font":"black"},"duration":3000,"colors":{"respond":"red"},"volume":0.2,"title":{"color":"indigo","font":"cyan","icon":"fa-regular fa-clock","badges":[{"color":"indigo","content":"AAAA","font":"red"},{"color":"lightgreen","content":"BBBBBBBB","font":"white"}],"content":"Salut"},"details":[{"font":"red","color":"indigo","content":"AAAA","icon":"fa-regular fa-image"},{"font":"white","color":"lightgreen","content":"BBBBBBBB","icon":"fa-regular fa-image"}],"sound":1,"eternal":false}')

    Citizen.Wait(3000)

    RequestForceNotification(notification:validate())
end)





local uuid = nil
RegisterNetEvent('ww_JobsDispatch:test')
AddEventHandler('ww_JobsDispatch:test', function()
    return RequestForceNotification({
        duration = 1000,
        sound = 1,
        volume = 0.2,
        eternal = true,
        title = {
            content = "test",
            icon = 'fa-solid fa-heart',
            color = "green",
            badges = {
                {
                    content = "salut",
                }
            }
        },
        details = {
            {
                content = "blah blah blah",
                icon = 'fa-regular fa-clock',
            },
            {
                content = "blah blah blah",
                icon = 'fa-solid fa-house',
            },
        },
        colors = {
            primary = "indigo",
            secondary = 0.8
        }
    })
end)