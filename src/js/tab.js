window.pui_tab = {
    checked: function (tab_item_dom) {
        var tab_dom = tab_item_dom.parentNode;
        var tab_items = tab_dom.querySelectorAll('.pui-tab-item');
        tab_items.forEach(tab_item => {
            tab_item.classList.remove('checked');
        });
        tab_item_dom.classList.add('checked');
        return window.pui_console.info(`Tab item ${tab_item_dom.innerText.replace(/\s+/g, '')} (tab_item_id : ${tab_item_dom.dataset.tab_item_id}) is checked`);
    },

    get_checked: function (tab_dom) {
        var tab_items = tab_dom.querySelectorAll('.pui-tab-item');
        var tab_items_array = Array.from(tab_items);
        var checked_tab_item = tab_items_array.find(tab_item => tab_item.classList.contains('checked'));
        return checked_tab_item;
    },
    disabled_item: function (tab_item_dom) {
        if (tab_item_dom.classList.contains('checked')) {
            return window.pui_console.error(`Tab item ${tab_item_dom.innerText.replace(/\s+/g, '')} (tab_item_id : ${tab_item_dom.dataset.tab_item_id}) is checked , you can't disable it`);
        }
        tab_item_dom.classList.add('disabled');
        window.pui_tab.init_tab();
        return window.pui_console.info(`Tab item ${tab_item_dom.innerText.replace(/\s+/g, '')} (tab_item_id : ${tab_item_dom.dataset.tab_item_id}) is disabled`);
    },
    abled_item: function (tab_item_dom) {
        tab_item_dom.classList.remove('disabled');
        window.pui_tab.init_tab();
        return window.pui_console.info(`Tab item ${tab_item_dom.innerText.replace(/\s+/g, '')} (tab_item_id : ${tab_item_dom.dataset.tab_item_id}) is unabled`);
    },
    init_tab: function () {
        var tab_items = document.querySelectorAll('.pui-tab-item');
        tab_items.forEach(tab_item_dom => {
            if (!tab_item_dom.classList.contains('disabled')) {
                tab_item_dom.onclick = function () {
                    window.pui_tab.checked(this);
                };
                tab_item_dom.check = function () {
                    return window.pui_tab.checked(this);
                }
                tab_item_dom.disabled = function () {
                    return window.pui_tab.disabled_item(this);
                }
                tab_item_dom.abled = function () {
                    return window.pui_console.error(`Tab item ${tab_item_dom.innerText.replace(/\s+/g, '')} (tab_item_id : ${tab_item_dom.dataset.tab_item_id}) can't be abled`);
                }
            } else {
                tab_item_dom.abled = function () {
                    return window.pui_tab.abled_item(this);
                }
                tab_item_dom.disabled = function () {
                    return window.pui_console.error(`Tab item ${tab_item_dom.innerText.replace(/\s+/g, '')} (tab_item_id : ${tab_item_dom.dataset.tab_item_id}) can't be disabled`);
                }
                tab_item_dom.onclick = function () {
                    return window.pui_console.error(`Tab item ${tab_item_dom.innerText.replace(/\s+/g, '')} (tab_item_id : ${tab_item_dom.dataset.tab_item_id}) can't be clicked`);
                };
                tab_item_dom.check = function () {
                    return window.pui_console.error(`Tab item ${tab_item_dom.innerText.replace(/\s+/g, '')} (tab_item_id : ${tab_item_dom.dataset.tab_item_id}) can't be checked`);
                }
            }
            tab_item_dom.dataset.tab_item_id = Array.from(tab_items).indexOf(tab_item_dom);

        });
        var tab_doms = document.querySelectorAll('.pui-tab');
        tab_doms.forEach(tab_dom => {
            tab_dom.get_checked = function () {
                return window.pui_tab.get_checked(this);
            };
            tab_dom.dataset.tab_id = Array.from(tab_doms).indexOf(tab_dom);
        });

    }
};


pui_tab.init_tab();