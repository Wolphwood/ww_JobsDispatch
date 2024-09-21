function SendNotification(job, template)
    print("Send Notification")
    TriggerServerEvent('ww_JobsDispatch:sendToPlayers', GetPlayerServerId(PlayerId()), job, template)
end

RegisterNetEvent('ww_JobsDispatch:requestNotification')
AddEventHandler('ww_JobsDispatch:requestNotification', function(template)
    local notification = Notification:new(template)
    return RequestForceNotification(notification:validate())
end)

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

function RemoveRespondButton(uuid)
    SendNUIMessage({
        type = 'REMOVE_RESPOND_BUTTON',
        uuid = uuid
    })
end
function RemoveAllRespondButton()
    SendNUIMessage({
        type = 'REMOVE_ALL_RESPOND_BUTTON',
    })
end
function RemoveLastRespondButton()
    SendNUIMessage({
        type = 'REMOVE_LAST_RESPOND_BUTTON',
    })
end

exports("notify",       SendNotification);
exports("notifyNew",    RequestNewNotification);
exports("notifyForce",  RequestForceNotification);
exports("notifyShow",   ShowNotification);
exports("notifyHide",   HideNotification);

exports("notifyRemoveRespondButton",     RemoveRespondButton);
exports("notifyRemoveAllRespondButton",  RemoveAllRespondButton);
exports("notifyRemoveLastRespondButton", RemoveLastRespondButton);




if Config.Debug then
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

        notification:setRespondContent("[Z] Salut!"):setRespondColor('red'):setRespondColor('black')
        
        notification:apply('{"respond":{"content":"[Z] Salut!","font":"black"},"duration":3000,"colors":{"respond":"red"},"volume":0.2,"title":{"color":"indigo","font":"cyan","icon":"fa-regular fa-clock","badges":[{"color":"indigo","content":"AAAA","font":"red"},{"color":"lightgreen","content":"BBBBBBBB","font":"white"}],"content":"Salut"},"details":[{"font":"red","color":"indigo","content":"AAAA","icon":"fa-regular fa-image"},{"font":"white","color":"lightgreen","content":"BBBBBBBB","icon":"fa-regular fa-image"}],"sound":1,"eternal":false}')

        Citizen.Wait(3000)

        RequestForceNotification(notification:validate())
    end)
end





local uuid = nil
RegisterNetEvent('ww_JobsDispatch:test')
AddEventHandler('ww_JobsDispatch:test', function()
    local notif = Notification:new({
		duration = 5000,
		title = {
			content = 'data.title',
			icon = 'data.icon',
			color = "#19a2aa",
			badges = {
				{content = 'data.code', color = "#19a2aa", font = "black",},
			},
		},
		details = {
            {
                content = "test"
            }
        },
        respond = {
            disabled = true,
            content = "zob"
        },
		colors = {
			primary   = "#25303B",
		},
	})

    return RequestForceNotification(notif:validate())
end)

RegisterNetEvent('ww_JobsDispatch:ptdr')
AddEventHandler('ww_JobsDispatch:ptdr', function()
    local notif = Notification:new({
        duration = 5000, -- 50s
        sound = 'https://wolphwood.ovh/ee.mp3',
        volume = 0.5,
        eternal = false, -- Disapear by themselve afte 'duration' time
        title = {
            content = "PTDR DSL",
            badges = {
                {
                    content = "YOU'VE BEEN RICKROLLED",
                    color   = "indigo",
                    font = "white",
                },
            },
        },
        details = {
            {
                content = "NEVER GONNA GIVE YOU UP",
            },
        },
        colors = {
            primary   = "indigo-500",
            secondary = 0.85 -- Take primary color and make it 15% darker
        },
    })

    return RequestForceNotification(notif:validate())
end)