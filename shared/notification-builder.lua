Notification = {}
Notification.__index = Notification

local function ValidateType(types, value, default)
    for _, t in pairs(types) do
        if type(value) == t then
            return value
        end
    end

    return default
end

local function Number(v,d) return ValidateType({"number"}, v, d) end
local function String(v,d) return ValidateType({"string"}, v, d) end
local function Boolean(v,d) return ValidateType({"boolean"}, v, d) end
local function Table(v,d) return ValidateType({"table"}, v, d) end
local function Nil(v,d) return ValidateType({"nil"}, v, d) end
local function NumStr(v,d) return ValidateType({"number", 'string'}, v, d) end

local function isNumber(v) return type(v) == 'number' end
local function isString(v) return type(v) == 'string' end
local function isBoolean(v) return type(v) == 'boolean' end
local function isTable(v) return type(v) == 'table' end
local function isNil(v) return v == nil end

-- Constructor
function Notification:new(template)
    local self = setmetatable({}, Notification)
    return self:apply(template)
end

function Notification:apply(template)
    if template == nil then template = {} end
    if isString(template) then template = json.decode(template) end
    
    self.duration = Number(template.duration, 3000)
    self.sound    = NumStr(template.sound, 1)
    self.volume   = Number(template.volume, 0.2)
    self.eternal  = Boolean(template.eternal, false)

    if (isTable(template.title)) then
        self.title = {}

        self.title.content = NumStr(template.title.content, nil)
        self.title.icon    = String(template.title.icon, nil)
        self.title.color   = String(template.title.color, nil)
        self.title.font    = String(template.title.font, nil)

        if (isTable(template.title.badges)) then
            self.title.badges = {}
            for k,v in ipairs(template.title.badges) do
                table.insert(self.title.badges, {
                    content = String(v.content),
                    color   = String(v.color, nil),
                    font    = String(v.font, nil),
                })
            end
        end
    end

    if (isTable(template.details)) then
        self.details = {}
        for k,v in ipairs(template.details) do
            table.insert(self.details, {
                content = String(v.content),
                icon    = String(v.icon, nil),
                color   = String(v.color, nil),
                font    = String(v.font, nil),
            })
        end
    end

    if (isTable(template.respond)) then
        self.respond = {
            content = String(template.respond.content),
            color   = String(template.respond.color, nil),
            font    = String(template.respond.font, nil)
        }
    end
    
    if (isTable(template.colors)) then
        self.colors = {}
        for k,v in ipairs(template.colors) do
            if (isNumber(v) or isString(v)) then
                self.colors[k] = v
            end
        end
    end
    
    return self
end

function Notification:validate()
    if isNil(next(self.title)) then self.title = nil end
    if isNil(next(self.details)) then self.details = nil end
    if isNil(next(self.respond)) then self.respond = nil end
    if isNil(next(self.colors)) then self.colors = nil end
    return self
end

function Notification:json()
    self:validate()
    return json.encode(self)
end

function Notification:setDuration(duration)
    self.duration = Number(duration, 3000)
end
function Notification:setSound(sound)
    self.sound = NumStr(sound, 1)
end
function Notification:setVolume(volume)
    self.volume = Number(volume, 0.2)
end
function Notification:setEternal(eternal)
    self.eternal = Boolean(eternal, false)
end

-- #region TITLE
function Notification:setTitle(content)
    if isNil(self.title) then self.title = {} end
    self.title.content = NumStr(content, nil)
    return self
end
function Notification:setTitleIcon(icon)
    if isNil(self.title) then self.title = {} end
    self.title.icon = String(icon, nil)
    return self
end
function Notification:setTitleFontColor(color)
    if isNil(self.title) then self.title = {} end
    self.title.font = String(color, nil)
    return self
end
function Notification:setTitleBackgroundColor(color)
    if isNil(self.title) then self.title = {} end
    self.title.color = String(color, nil)
    return self
end
-- #endregion

-- #region TITLE BADGES
function Notification:removeAllTitleBadges()
    self.title.badges = nil
    return self
end
function Notification:setTitleBadges(badges)
    if isNil(self.title.badges) then self.title.badges = {} end

    if not isNil(badges.content) then
        table.insert(self.title.badges, badges)
    end

    if table.isIndexed(badges) then
        for k,v in ipairs(badges) do
            table.insert(self.title.badges, {
                content = String(v.content),
                color   = String(v.color, nil),
                font    = String(v.font, nil),
            })
        end
    end

    return self
end
function Notification:addTitleBadge(badge)
    if isNil(self.title.badges) then self.title.badges = {} end
    if not isTable(badge) then return false end

    table.insert(self.title.badges, {
        content = String(badge.content),
        color   = String(badge.color, nil),
        font    = String(badge.font, nil),
    })

    return self
end
function Notification:editTitleBadge(index, badge)
    if isNil(self.title.badges) then self.title.badges = {} end

    if self.title.badges[index] == nil then
        return false
    end
    
    if isString(badge.content) then self.title.badges[index].content = badge.content end
    if isString(badge.color) then self.title.badges[index].color = badge.color end
    if isString(badge.font) then self.title.badges[index].font = badge.font end

    return self
end
function Notification:removeTitleBadge(index)
    if isNil(self.title.badges) then return self end
    table.remove(self.title.badges, index)
    return self
end
-- #endregion


-- #region DETAILS (aka content)
function Notification:removeAllContentLines()
    self.details = nil
    return self
end
function Notification:setContentLines(details)
    if isNil(self.details) then self.details = {} end

    if not isNil(details.content) then
        table.insert(self.details, details)
    end

    if table.isIndexed(details) then
        for k,v in ipairs(details) do
            table.insert(self.details, {
                content = String(v.content),
                icon    = String(v.icon, nil),
                color   = String(v.color, nil),
                font    = String(v.font, nil),
            })
        end
    end

    return self
end
function Notification:addContentLine(detail)
    -- log(detail)

    if isNil(self.details) then self.details = {} end
    if not isTable(detail) then return false end

    table.insert(self.details, {
        content = String(detail.content),
        icon    = String(detail.icon, nil),
        color   = String(detail.color, nil),
        font    = String(detail.font, nil),
    })

    return self
end
function Notification:editContentLine(index, detail)
    if isNil(self.details) then self.details = {} end

    if self.details[index] == nil then
        return false
    end
    
    if isString(detail.content) then self.details[index].content = detail.content end
    if isString(detail.icon) then self.details[index].icon = detail.icon end
    if isString(detail.color) then self.details[index].color = detail.color end
    if isString(detail.font) then self.details[index].font = detail.font end

    return self
end
function Notification:removeContentLine(index)
    if isNil(self.details) then return self end
    table.remove(self.details, index)
    return self
end
-- #endregion

-- #region RESPOND
function Notification:setRespondContent(content)
    if isNil(self.respond) then self.respond = {} end
    self.respond.content = String(content, nil)
    return self
end
function Notification:setRespondFontColor(color)
    if isNil(self.respond) then self.respond = {} end
    self.respond.font = String(color, nil)
    return self
end
function Notification:setRespondColor(color)
    if isNil(self.respond) then self.respond = {} end
    self.respond.color = String(color, nil)
    return self
end
-- #endregion


function Notification:setPrimaryColor(color)
    if isNil(self.colors) then self.colors = {} end
    self.colors.primary = NumStr(color, nil)
    return self
end

function Notification:setSecondaryColor(color)
    if isNil(self.colors) then self.colors = {} end
    self.colors.secondary = NumStr(color, nil)
    return self
end

function Notification:setFontColor(color)
    if isNil(self.colors) then self.colors = {} end
    self.colors.font = String(color, nil)
    return self
end

function Notification:setBadgesColor(color)
    if isNil(self.colors) then self.colors = {} end
    self.colors.badge = String(color, nil)
    return self
end

function Notification:setRespondColor(color)
    if isNil(self.colors) then self.colors = {} end
    self.colors.respond = String(color, nil)
    return self
end

-- function Notification:setColor(name, color)
--     if isNil(self.colors) then self.colors = {} end
--     if name == 'primary' or name == 'secondary' or name == 'font' then
--         local k = { primary = "setPrimaryColor", secondary = "setSecondaryColor", font = "setFontColor" }
--         print("You can't define '".. name .."' color with this function.\nPlease use '".. k[name] .."' instead.")
--     end
--     self.colors[name] = String(color, nil)
-- end