fx_version 'cerulean'
game 'gta5'
lua54 'yes'

version '1.0.0'
description 'https://github.com/Wolphwood'

author "Julius & Wolphwood"

client_scripts {
    '@es_extended/locale.lua',
    'client/*',
}

shared_scripts {
    '@ox_lib/init.lua',
    '@es_extended/imports.lua',
    'config.lua',
    'locales/*',
    'shared/*'
}

server_scripts {
    '@es_extended/locale.lua',
    '@mysql-async/lib/MySQL.lua',
    'server/*'
}

ui_page {
    'nui/index.html',
}

files {
	'nui/**'
}
