Voici la documentation en Markdown pour les fonctions que vous avez fournies :

# Documentation des Fonctions

## Table des Matières

- [RequestNewNotification(data)](#requestnewnotificationdata)
- [RequestForceNotification(data)](#requestforcenotificationdata)
- [ShowNotification(uuid)](#shownotificationuuid)
- [HideNotification(uuid)](#hidenotificationuuid)

---

## Methods

> ### `RequestNewNotification(data)`
> Envoie une demande pour créer une nouvelle notification et retourne une promesse qui sera résolue avec la réponse de l'interface utilisateur.
> Renvoi l'uuid de la notification créer 
>
> #### Arguments
> | Argument | Type  | Optionel | Default | Description                         |
> |----------|-------|----------|---------|-------------------------------------|
> | data     | Table | ❌       | `nil`   | Données à envoyer pour la notification. |
> 
> #### Exemple
> ```lua
> local notif = Notification:new(template)
> notif:setTitle("Salut le monde!")
> 
> local uuid = RequestNewNotification(notif:validate())
> ```

---

> ### `RequestForceNotification(data)`
> Envoie une demande pour créer une notification de force et retourne une promesse qui sera résolue avec la réponse de l'interface utilisateur.
> Renvoi l'uuid de la notification créer
> 
> #### Arguments
> | Argument | Type  | Optionel | Default | Description                         |
> |----------|-------|----------|---------|-------------------------------------|
> | data     | Table | ❌       | `nil`   | Données à envoyer pour la notification. |
>
>#### Exemple
> ```lua
> local notif = Notification:new(template)
> notif:setTitle("Salut le monde!")
> 
> local uuid = RequestForceNotification(notif:validate())
> ```

---

> ### `ShowNotification(uuid)`
> Affiche une notification existante en utilisant son UUID.
> 
> #### Arguments
> | Argument | Type   | Optionel | Default | Description                    |
> |----------|--------|----------|---------|--------------------------------|
> | uuid     | String | ❌       | `nil`   | UUID de la notification à afficher. |
> 
> #### Exemple
> ```lua
> ShowNotification("F6R8FZ")
> ```

---

> ### `HideNotification(uuid)`
> Cache une notification existante en utilisant son UUID.
> 
> #### Arguments
> | Argument | Type   | Optionel | Default | Description                    |
> |----------|--------|----------|---------|--------------------------------|
> | uuid     | String | ❌       | `nil`   | UUID de la notification à cacher. |
> 
> #### Exemple
> ```lua
> HideNotification("F6R8FZ")
> ```

---