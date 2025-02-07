// 定义函数动态更新
window.pui_statistic = {
    count: function (element, time) {
        var value = element.querySelector('.value');
        if (value) {
            if (element.interval) {
                clearInterval(element.interval);
            }
            var count = parseInt(value.dataset.count, 10);
            var now = 0;
            var all_time = time;
            var step = count / (all_time / 10);
            if (this.formatted(value.innerText)) {
                var formatted_check = true;
            } else {
                var formatted_check = false;
            }
            value.innerText = "0";
            element.interval = setInterval(() => {
                now += step;
                var roundedValue = Math.min(Math.round(now), count);

                if (formatted_check) {
                    value.innerText = this.format(roundedValue);
                } else {
                    value.innerText = roundedValue;
                }

                if (now >= count) {
                    clearInterval(element.interval);
                }
            }, 10);
        }
    },
    format: function (number) {
        return new Intl.NumberFormat().format(number);
    },
    formatted: function (text) {
        return text.includes(',');
    }
};

var statistics = document.querySelectorAll('.pui-statistic');
statistics.forEach(statistic_dom => {
    var value = statistic_dom.querySelector('.value');
    if (value) {
        var count = parseInt(value.innerText.replace(/,/g, ''), 10);
        value.dataset.count = count; 
    }
});


var statistics_count = document.querySelectorAll('.pui-statistic.count');
statistics_count.forEach(statistic_dom => {
    statistic_dom.count = function (time) {
        pui_statistic.count(this, time);
    };
    statistic_dom.count(2000);
});