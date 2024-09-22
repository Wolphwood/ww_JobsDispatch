local _uuidRandomValue = 0
function uuid(t)
    if (os ~= nil) then
        math.randomseed(tonumber(tostring(os.time()) .. tostring(math.abs(_uuidRandomValue))))
    else
        math.randomseed(
            GetClockDayOfWeek()..GetClockMonth()..GetClockDayOfMonth()..GetClockYear()..GetClockHours()..GetClockMinutes()..math.random(0, 0xFF)..tostring(math.abs(_uuidRandomValue))
        )
    end

    local template = t or 'xxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    local uuid, _ = string.gsub(template, '[xy0f]', function (c)
        local v
        if (c == 'x') then
            v = math.random(0, 0xf)
        elseif (c == 'y') then
            v = math.random(8, 0xb)
        elseif (c == '0') then
            v = math.random(0, 9)
        elseif (c == 'f') then
            v = math.random(0xa, 0xf)
        else
            error("Caractère non pris en charge dans le template: " .. c)
        end

        return string.format('%x', v)
    end)

    _uuidRandomValue = _uuidRandomValue + math.random(0xFFFF)
    return uuid
end

function tprint (tbl, indent)
    if not indent then indent = 0 end
    local toprint = string.rep(" ", indent) .. "{\r\n"
    indent = indent + 2 
    for k, v in pairs(tbl) do
        toprint = toprint .. string.rep(" ", indent)
        if (type(k) == "number") then
            toprint = toprint .. "[" .. k .. "] = "
        elseif (type(k) == "string") then
            toprint = toprint  .. k ..  "= "   
        end
        if (type(v) == "number") then
            toprint = toprint .. v .. ",\r\n"
        elseif (type(v) == "string") then
            toprint = toprint .. "\"" .. v .. "\",\r\n"
        elseif (type(v) == "table") then
            toprint = toprint .. tprint(v, indent + 2) .. ",\r\n"
        else
            toprint = toprint .. "\"" .. tostring(v) .. "\",\r\n"
        end
    end
    toprint = toprint .. string.rep(" ", indent-2) .. "}"
    return toprint
end

function log(...)
    local t = {...}
    for i, v in ipairs(t) do
        if type(v) == 'table' then
            t[i] = tprint(v)
        end
    end

    print(table.unpack(t))
end

function table.isIndexed(t)
    if type(t) ~= 'table' then
        return false
    end

    local index = 1
    for k,_ in pairs(t) do
        if k ~= index then
            return false
        end
        index = index + 1
    end
    return true
end

function table.isNamed(t)
    if type(t) ~= "table" then
        return false
    end
    
    for k, _ in pairs(t) do
        if type(k) ~= "string" then
            return false  -- La table a des clés qui ne sont pas des chaînes
        end
    end
    return true
end

function table.isMixed(t)
    return not table.isIndexed(t) and not table.isNamed(t)
end