RegisterNetEvent('ww_JobsDispatch:sendToPlayers')
AddEventHandler('ww_JobsDispatch:sendToPlayers', function(source, job, template)
    for _, playerId in pairs(GetPlayers()) do
        local xPlayer = ESX.GetPlayerFromId(playerId)
        if xPlayer.job.name == job then
            print("Send To "..xPlayer.name.." with id : "..playerId)
            TriggerClientEvent('ww_JobsDispatch:requestNotification', playerId, template)
        end
    end
end)

RegisterCommand('dispatch', function()
    TriggerClientEvent('ww_JobsDispatch:test', -1)
end)

RegisterCommand('dispatch1', function()
    TriggerClientEvent('ww_JobsDispatch:ptdr', -1)
end)

RegisterCommand('dispatch2', function()
    TriggerClientEvent('ww_JobsDispatch:test_b', -1)
end)

