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

exports("notify",       RequestNewNotification);
exports("notifyForce",  RequestForceNotification);
exports("notifyShow",   ShowNotification);
exports("notifyHide",   HideNotification);





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





local uuid = nil
RegisterNetEvent('ww_JobsDispatch:test')
AddEventHandler('ww_JobsDispatch:test', function()
    local notif = Notification:new({
        duration = 5000, -- 5s
        sound = 1,       -- use './snd/1.mp3'
        volume = 0.2,    -- 20%
        eternal = false, -- Disapear by themselve afte 'duration' time
        title = {
            content = "Discharge of firearm",
            icon = "fa-solid fa-gun",
            color = "cyan", -- Icon color
            -- font = "", -- to override default font color
            badges = {
                {
                    content = "#1",
                    color   = "green",
                    -- font = "white", -- to override default font color
                },
                {
                    content = "10-11",
                    color   = "cyan",
                    -- font = "white", -- to override default font color
                },
            },
        },
        details = {
            {
                content = "Time: hh:mm:ss",
                icon    = "fa-solid fa-clock",
                -- color = "cyan", -- to override default icon color
                -- font  = "white", -- to override default font color
            },
            {
                content = "Del Perro Fwy, Downtown",
                icon    = "fa-solid fa-map-location-dot",
                -- color = "cyan", -- to override default icon color
                -- font  = "white", -- to override default font color
            },
            {
                content = "Gender: Male",
                icon    = "fa-solid fa-user",
                -- color = "cyan", -- to override default icon color
                -- font  = "white", -- to override default font color
            },
            {
                content = "Weapon: CLASS 1 - Heavy Pistol",
                icon    = "fa-solid fa-gun",
                -- color = "cyan", -- to override default icon color
                -- font  = "white", -- to override default font color
            },
        },
        respond = {
            -- content = "", -- to override default button
            -- color   = "cyan", -- to override default button color
            -- font    = "white", -- to override default font color
        },
        colors = {
            primary   = "#25303B",
            secondary = 0.85 -- Take primary color and make it 15% darker
        },
    })


    return RequestForceNotification(notif:validate())
end)