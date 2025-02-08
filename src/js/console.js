// Copyright © 2024 OpenRapid. All rights reserved.

/*
@from: https://juejin.cn/post/6844904021593964557
*/
const typeColor = (type) => {
    switch (type) {
        case 'primary':
            return '#409EFF'
        case 'success':
            return '#67C23A'
        case 'warning':
            return '#E6A23C'
        case 'danger':
            return '#F56C6C'
        default:
            return '#909399'
    }
}

window.pui_console = {
    output: function (text, type) {
        console.log(
            `%c Personal UI %c ${text} %c`,
            `background:${typeColor(type)};border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
            `border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 0 4px 4px 0; color: ${typeColor(type)};`,
            'background:transparent'
        )
    },
    primary: function (text) {
        this.output(text, 'primary')
    },
    success: function (text) {
        this.output(text, 'success')
    },
    warning: function (text) {
        this.output(text, 'warning')
    },
    error: function (text) {
        this.output(text, 'danger')
    },
    info: function (text) {
        this.output(text, 'info')
    }
}