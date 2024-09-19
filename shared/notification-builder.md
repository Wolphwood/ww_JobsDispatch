# Documentation de la classe `Notification`

## Table des Matières
- Creation
    - [Notification:new(template)](#notificationnewtemplate)

- Misc
    - [apply(template)](#notificationapplytemplate)
    - [validate()](#notificationvalidate)
    - [json()](#notificationjson)

- Basics
    - [setDuration(duration)](#notificationsetdurationduration)
    - [setSound(sound)](#notificationsetsoundsound)
    - [setVolume(volume)](#notificationsetvolumevolume)
    - [setEternal(eternal)](#notificationseteternaleternal)

- Title
    - [setTitle(content)](#notificationsettitlecontent)
    - [setTitleIcon(icon)](#notificationsettitleiconicon)
    - [setTitleFontColor(color)](#notificationsettitlefontcolorcolor)
    - [setTitleBackgroundColor(color)](#notificationsettitlebackgroundcolorcolor)

- Title Badges
    - [removeAllTitleBadges()](#notificationremovealltitlebadges)
    - [setTitleBadges(badges)](#notificationsettitlebadgesbadges)
    - [addTitleBadge(badge)](#notificationaddtitlebadgebadge)
    - [editTitleBadge(index, badge)](#notificationedittitlebadgeindexbadge)
    - [removeTitleBadge(index)](#notificationremovetitlebadgeindex)

- Content / Details
    - [removeAllContentLines()](#notificationremoveallcontentlines)
    - [setContentLines(details)](#notificationsetcontentlinesdetails)
    - [addContentLine(detail)](#notificationaddcontentlinedetail)
    - [editContentLine(index, detail)](#notificationeditcontentlineindexdetail)
    - [removeContentLine(index)](#notificationremovecontentlineindex)

- Respond Button
    - [setRespondContent(content)](#notificationsetrespondcontentcontent)
    - [setRespondFontColor(color)](#notificationsetrespondfontcolorcolor)
    - [setRespondColor(color)](#notificationsetrespondcolorcolor)

- Colors
    - [setPrimaryColor(color)](#notificationsetprimarycolorcolor)
    - [setSecondaryColor(color)](#notificationsetsecondarycolorcolor)
    - [setFontColor(color)](#notificationsetfontcolorcolor)
    - [setBadgesColor(color)](#notificationsetbadgescolorcolor)
    - [setRespondColor(color)](#notificationsetrespondcolorcolor)


## Strucure Table
|Nom|Type|Optionel|Default|Description|
|-|-|-|-|-|
| duration | Number                | ✅ | 3000  | Durée de la notification en millisecondes |
| sound    | Number or String      | ✅ | 1     | Nom du fichier sonore à jouer (si Number, alors utilse l'un des sons par défaut 1-6) |
| volume   | Number                | ✅ | 0.2   | Volume du sons |
| eternal  | Boolean               | ✅ | false | Indique si la notification est éternelle |
| title    | TitleTable            | ✅ | ❌    | Section titre de la notification |
| details  | Table of ContentTable | ✅ | ❌    | Section contenu de la notification |
| respond  | RepondTable           | ✅ | ❌    | Définis le contenu et l'apparence du bouton réponse |
| colors   | ColorTable            | ✅ | ❌    | Couleur par défaut de la notification |

### TitleTable
|Nom|Type|Optionel|Default|Description|
|-|-|-|-|-|
| content | String       | ❌ | ❌ | Contenu du titre |
| icon    | String       | ✅ | ❌ | Icon de la notification (voir [font awesome](https://fontawesome.com/search?o=r&m=free)) |
| color   | String       | ✅ | ❌ | Couleur de l'icône |
| font    | String       | ✅ | ❌ | Couleur du texte |
| badges  | {BadgeTable} | ✅ | ❌ | Badges de la notification |

### RespondTable
|Nom|Type|Optionel|Default|Description|
|-|-|-|-|-|
| content | String | ✅ | ❌ | Texte du bagdge  |
| color   | String | ✅ | ❌ | Couleur du badge |
| font    | String | ✅ | ❌ | Couleur du texte |

### ContentTable
|Nom|Type|Optionel|Default|Description|
|-|-|-|-|-|
| content | String | ❌ | ❌ | Contenu de la ligne |
| icon    | String | ✅ | ❌ | Icon de la ligne (voir [font awesome](https://fontawesome.com/search?o=r&m=free)) |
| color   | String | ✅ | ❌ | Couleur de l'icône |
| font    | String | ✅ | ❌ | Couleur du texte |

### RespondTable
|Nom|Type|Optionel|Default|Description|
|-|-|-|-|-|
| content | String | ✅ | `[Y] Respond` | Texte du bouton |
| color   | String | ✅ | ❌           | Couleur du bouton |
| font    | String | ✅ | ❌           | Couleur du texte |

### ColorTable
|Nom|Type|Optionel|Default|Description|
|-|-|-|-|-|
| primary   | String | ❌ | ❌ | Contenu du titre |
| secondary | String | ✅ | ❌ | Icon de la notification (voir font awesome) |
| font      | String | ✅ | ❌ | Couleur de l'icône |
| respond   | String | ✅ | ❌ | Couleur de l'icône |
| badge     | String | ✅ | ❌ | Couleur de l'icône |

_\*NB : Ceci est pour définir les couleurs par défaut, toutes autres couleurs définies ailleurs que dans `data.colors` écrasent celle-ci_

### Full Exemple
```lua
{
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
}
```


## Methods

### `Notification:new(template)`
Initializes a new `Notification` instance.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | template | Table  | ✅ | `{}` | Template used for initialization.  |

#### Example
```lua
local notification = Notification:new(template)
```

### `Notification:apply(template)`
Applies a template to the `Notification` instance. This method can be used to update the notification with new values from the template.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | template | Table / Json String | ✅ | `{}` | The template to apply to the instance. |

#### Example
```lua
notification:apply({ duration = 5000, sound = "alert" })
```

### `Notification:validate()`
Validates the current `Notification` instance by removing empty properties (`title`, `details`, `respond`, `colors`).

#### Arguments
> This function doesn't take any aguments.

#### Example
```lua
notification:validate()
```

### `Notification:json()`
Serializes the `Notification` instance into a JSON string.

#### Arguments
> This function doesn't take any aguments.

#### Example
```lua
local jsonString = notification:json()
```

### `Notification:setDuration(duration)`
Sets the duration of the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | duration | Number | ✅ | `3000` | Duration of the notification in milliseconds. |

#### Example
```lua
notification:setDuration(5000)
```

### `Notification:setSound(sound)`
Sets the sound for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | sound | Number/String  | ✅ | `1` | The sound identifier or name. |

#### Example
```lua
notification:setSound("ding")
```

### `Notification:setVolume(volume)`
Sets the volume for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | volume | Number | ✅ | `0.2` | Volume level (0 to 1). |

#### Example
```lua
notification:setVolume(0.5)
```

### `Notification:setEternal(eternal)`
Sets whether the notification should be eternal (not auto-dismissed).

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | eternal  | Boolean | ✅       | `false` | Whether the notification is eternal. |

#### Example
```lua
notification:setEternal(true)
```

### `Notification:setTitle(content)`
Sets the title content for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | content | Number/String | ✅ | `nil` | The title content. |

#### Example
```lua
notification:setTitle("New Message")
```

### `Notification:setTitleIcon(icon)`
Sets the icon for the notification's title.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | icon | String | ✅ | `nil` | The icon for the title. |

#### Example
```lua
notification:setTitleIcon("message-icon")
```

### `Notification:setTitleFontColor(color)`
Sets the font color for the title.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil` | The font color for the title. |

#### Example
```lua
notification:setTitleFontColor("#FFFFFF")
```

### `Notification:setTitleBackgroundColor(color)`
Sets the background color for the title.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil` | The background color of the title. |

#### Example
```lua
notification:setTitleBackgroundColor("#000000")
```

### `Notification:removeAllTitleBadges()`
Removes all badges from the title.

#### Arguments
> This function doesn't take any aguments.

#### Example
```lua
notification:removeAllTitleBadges()
```

### `Notification:setTitleBadges(badges)`
Sets the badges for the title.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | badges | Table  | ❌ | N/A | A table containing badge properties. |

#### Example
```lua
notification:setTitleBadges({
    { content = "New", color = "#FF0000", font = "Arial" }
})
```

### `Notification:addTitleBadge(badge)`
Adds a single badge to the title.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | badge | Table | ❌ | N/A | A table containing badge properties. |

#### Example
```lua
notification:addTitleBadge({ content = "New", color = "#FF0000", font = "Arial" })
```

### `Notification:editTitleBadge(index, badge)`
Edits an existing badge in the title.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | index | Number | ❌ | N/A | The index of the badge to edit. |
> | badge | Table  | ❌ | N/A | A table containing badge properties. |

#### Example
```lua
notification:editTitleBadge(1, { content = "Updated", color = "#00FF00" })
```

### `Notification:removeTitleBadge(index)`
Removes a badge from the title by its index.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | index | Number | ❌ | N/A | The index of the badge to remove. |

#### Example
```lua
notification:removeTitleBadge(1)
``` 

### `Notification:removeAllContentLines()`
Removes all content lines from the notification's details.

#### Arguments
> This function doesn't take any aguments.

#### Example
```lua
notification:removeAllContentLines()
```

### `Notification:setContentLines(details)`
Sets the content lines for the notification's details.

⚠ Remove all existing tables

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | details | Table | ❌ | N/A | A table containing detail properties. |

#### Example
```lua
notification:setContentLines({
    { content = "Line 1", icon = "icon1.png", color = "#FFFFFF", font = "Arial" },
    { content = "Line 2", icon = "icon2.png", color = "#000000", font = "Verdana" }
})
```

### `Notification:addContentLine(detail)`
Adds a single content line to the notification's details.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | detail | Table | ❌ | N/A | A table containing detail properties. |

#### Example
```lua
notification:addContentLine({ content = "New Line", icon = "new-icon.png", color = "#00FF00", font = "Arial" })
```

### `Notification:editContentLine(index, detail)`
Edits an existing content line in the notification's details.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | index  | Number | ❌ | N/A | The index of the content line to edit.|
> | detail | Table  | ❌ | N/A | A table containing detail properties. |

#### Example
```lua
notification:editContentLine(1, { content = "Updated Line", color = "#FF00FF" })
```

### `Notification:removeContentLine(index)`
Removes a content line from the notification's details by its index.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | index | Number | ❌ | N/A | The index of the content line to remove. |

#### Example
```lua
notification:removeContentLine(1)
```

### `Notification:setRespondContent(content)`
Sets the response content for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | content  | String | ✅ | `nil` | The response content. |

#### Example
```lua
notification:setRespondContent("This is a response")
```

### `Notification:setFontColorContent(color)`
Sets the font color for the response content.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil` | The font color of the response. |

#### Example
```lua
notification:setFontColorContent("#FF0000")
```

### `Notification:setColorContent(color)`
Sets the background color for the response content.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil` | The background color of the response. |

#### Example
```lua
notification:setColorContent("#FFFFFF")
```

### `Notification:setPrimaryColor(color)`
Sets the primary color for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | Number/String  | ✅ | `nil` | The primary color value.  |

#### Example
```lua
notification:setPrimaryColor("#123456")
```

### `Notification:setSecondaryColor(color)`
Sets the secondary color for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | Number/String  | ✅ | `nil` | The secondary color value.  |

#### Example
```lua
notification:setSecondaryColor("#654321")
```

### `Notification:setFontColor(color)`
Sets the font color for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil` | The font color value.     |

#### Example
```lua
notification:setFontColor("#A1A1A1")
```

### `Notification:setBadgesColor(color)`
Sets the color for badges in the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil` | The color value for badges.   |

#### Example
```lua
notification:setBadgesColor("#FF5733")
```

### `Notification:setRespondColor(color)`
Sets the color for the response section of the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil`   | The color value for the response. |

#### Example
```lua
notification:setRespondColor("#33FF57")
```

### `Notification:removeAllContentLines()`
Removes all content lines from the notification's details.

#### Arguments
> This function doesn't take any aguments.

#### Example
```lua
notification:removeAllContentLines()
```

### `Notification:setContentLines(details)`
Sets the content lines for the notification's details.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | details | Table | ❌ | N/A | A table containing detail properties. |

#### Example
```lua
notification:setContentLines({
    { content = "Line 1", icon = "icon1.png", color = "#FFFFFF", font = "Arial" },
    { content = "Line 2", icon = "icon2.png", color = "#000000", font = "Verdana" }
})
```

### `Notification:addContentLine(detail)`
Adds a single content line to the notification's details.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | detail | Table | ❌ | N/A | A table containing detail properties. |

#### Example
```lua
notification:addContentLine({ content = "New Line", icon = "new-icon.png", color = "#00FF00", font = "Arial" })
```

### `Notification:editContentLine(index, detail)`
Edits an existing content line in the notification's details.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | index  | Number | ❌ | N/A | The index of the content line to edit.|
> | detail | Table  | ❌ | N/A | A table containing detail properties. |

#### Example
```lua
notification:editContentLine(1, { content = "Updated Line", color = "#FF00FF" })
```

### `Notification:removeContentLine(index)`
Removes a content line from the notification's details by its index.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | index | Number | ❌ | N/A | The index of the content line to remove. |

#### Example
```lua
notification:removeContentLine(1)
```

### `Notification:setRespondContent(content)`
Sets the response content for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | content | String | ✅ | `nil` | The response content. |

#### Example
```lua
notification:setRespondContent("This is a response")
```

### `Notification:setFontColorContent(color)`
Sets the font color for the response content.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil` | The font color of the response. |

#### Example
```lua
notification:setFontColorContent("#FF0000")
```

### `Notification:setColorContent(color)`
Sets the background color for the response content.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil` | The background color of the response. |

#### Example
```lua
notification:setColorContent("#FFFFFF")
```

### `Notification:setPrimaryColor(color)`
Sets the primary color for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | Number/String | ✅ | `nil` | The primary color value.  |

#### Example
```lua
notification:setPrimaryColor("#123456")
```

### `Notification:setSecondaryColor(color)`
Sets the secondary color for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | Number/String | ✅ | `nil` | The secondary color value. |

#### Example
```lua
notification:setSecondaryColor("#654321")
```

### `Notification:setFontColor(color)`
Sets the font color for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil` | The font color value. |

#### Example
```lua
notification:setFontColor("#A1A1A1")
```

### `Notification:setBadgesColor(color)`
Sets the color for badges in the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil`   | The color value for badges. |

#### Example
```lua
notification:setBadgesColor("#FF5733")
```

### `Notification:setRespondColor(color)`
Sets the color for the response section of the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil` | The color value for the response. |

#### Example
```lua
notification:setRespondColor("#33FF57")
```

Here are the remaining methods presented in the same format:

### `Notification:setDuration(duration)`
Sets the duration for how long the notification should be displayed.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | duration | Number | ✅ | 3000 | Duration in milliseconds. |

#### Example
```lua
notification:setDuration(5000)
```

### `Notification:setSound(sound)`
Sets the sound for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | sound | Number/String  | ✅ | 1 | Sound ID or file path. |

#### Example
```lua
notification:setSound("notification_sound.mp3")
```

### `Notification:setVolume(volume)`
Sets the volume for the notification sound.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | volume   | Number | ✅ | 0.2 | Volume level (0.0 to 1.0). |

#### Example
```lua
notification:setVolume(0.5)
```

### `Notification:setEternal(eternal)`
Sets whether the notification should be displayed indefinitely.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | eternal  | Boolean | ✅ | false | If `true`, the notification is eternal. |

#### Example
```lua
notification:setEternal(true)
```

### `Notification:setTitle(content)`
Sets the title content for the notification.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | content  | Number/String  | ✅ | `nil` | The content of the title. |

#### Example
```lua
notification:setTitle("Notification Title")
```

### `Notification:setTitleIcon(icon)`
Sets the icon for the notification title.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | icon | String | ✅ | `nil` | Path or URL of the icon image. |

#### Example
```lua
notification:setTitleIcon("icon.png")
```

### `Notification:setTitleFontColor(color)`
Sets the font color for the notification title.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil` | The font color value. |

#### Example
```lua
notification:setTitleFontColor("#FFFFFF")
```

### `Notification:setTitleBackgroundColor(color)`
Sets the background color for the notification title.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | color | String | ✅ | `nil` | The background color of the title. |

#### Example
```lua
notification:setTitleBackgroundColor("#000000")
```

### `Notification:removeAllTitleBadges()`
Removes all badges from the notification title.

#### Arguments
> This function doesn't take any aguments.

#### Example
```lua
notification:removeAllTitleBadges()
```

### `Notification:setTitleBadges(badges)`
Sets badges for the notification title.

⚠ Remove all existing tables

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | badges | Table | ✅ | `nil` | A table of badge properties. |

#### Example
```lua
notification:setTitleBadges({
    { content = "Badge 1", color = "#FF0000", font = "Arial" },
    { content = "Badge 2", color = "#00FF00", font = "Verdana" }
})
```

### `Notification:addTitleBadge(badge)`
Adds a single badge to the notification title.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | badge | Table | ✅ | `nil` | A table containing badge properties. |

#### Example
```lua
notification:addTitleBadge({ content = "New Badge", color = "#0000FF", font = "Tahoma" })
```

### `Notification:editTitleBadge(index, badge)`
Edits an existing badge in the notification title.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | index | Number | ✅ | `nil` | Index of the badge to edit. |
> | badge | Table  | ✅ | `nil` | A table containing badge properties. |

#### Example
```lua
notification:editTitleBadge(1, { content = "Edited Badge", color = "#FFFF00" })
```

### `Notification:removeTitleBadge(index)`
Removes a badge from the notification title by its index.

#### Arguments
> | Argument | Type | Optional | Default | Description |
> |-|-|-|-|-|
> | index | Number | ✅ | `nil` | Index of the badge to remove. |

#### Example
```lua
notification:removeTitleBadge(1)
```
