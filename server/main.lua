RegisterCommand('dispatch', function()
    TriggerClientEvent('ww_JobsDispatch:test', -1)
end)

RegisterCommand('dispatch1', function()
    TriggerClientEvent('ww_JobsDispatch:test_a', -1)
end)

RegisterCommand('dispatch2', function()
    TriggerClientEvent('ww_JobsDispatch:test_b', -1)
end)

