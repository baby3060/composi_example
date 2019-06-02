// Image 만들기
(function() {
    var target = document.getElementById("sliderdot");

    var imagesLength = getElementsByClassName("banner").length;
    
    target.style.display = "none";

    if( imagesLength > 0 ) {
        for( var i = 0; i < imagesLength; i++ ) {
            var dot = document.createElement("a");
            dot.href = "#";
            dot.textContent = "1";
            dot.className = "dot";
            target.appendChild(dot);    
        }
    }

    target.style.display = "inline-block";
})();

// Top Menu Click
function topClick(cmd) {
    alert(cmd);
}

(function() {
    window.addEventListener("resize", function() {
        newsArrayCount();

    }, false);
})();

function newsArrayCount() {
    var width = window.innerWidth || document.body.scrollWidth;

    var activeNewsChild = getElementsByClassName("newsvisible")[0].children;

    
}

(function() {
    var inner_menu = getElementsByClassName("inner_menu");

    var innerLength = inner_menu.length;
    var innerObj = "";
    var cmd = "";

    for( var i = 0; i < innerLength; i++ ) {
        (
            function(j) {
                innerObj = inner_menu[j];
                if( innerObj.addEventListener ) {
                    innerObj.addEventListener('click', function() {
                        cmd = this.dataset.cmd;
                        topClick(cmd);
                    }, false);
                } else {
                    innerObj.attachEvent('onclick', function() {
                        cmd = this.dataset.cmd;
                        topClick(cmd);
                    }, false);
                }
            }
        )(i);
    }
})();

// Left Menu Click
(function() {
    var innerspan = getElementsByClassName("innerspan");
    var innerObj = "";
    var itemmenu = "";
    var innerLength = innerspan.length;
    var showLength = 0;
    var showMenu = "";
    for( var i = 0; i < innerLength; i++ ) {
        (
            function(j) {
                innerObj = innerspan[j];
                if(innerObj.addEventListener) {
                    innerObj.addEventListener("click", function() {
                        itemmenu = getElementsByClassName("itemmenu")[j];
                        
                        showMenu = getElementsByClassName("show");
                        
                        showLength = showMenu.length;
                        if( showLength > 0 ) {
                            
                            for( var showI = 0; showI < showLength; showI++ ) {
                                if(showMenu[showI] !== itemmenu) {
                                    showMenu[showI].classList.remove("show");
                                } 
                            }
                        }

                        itemmenu.classList.toggle("show");
                    }, false);
                } else {
                    innerObj.attachEvent("onclick", function() {
                        itemmenu = getElementsByClassName("itemmenu")[j];
                        
                        showMenu = getElementsByClassName("show");
                        
                        showLength = showMenu.length;
                        if( showLength > 0 ) {
                            
                            for( var showI = 0; showI < showLength; showI++ ) {
                                if(showMenu[showI] !== itemmenu) {
                                    showMenu[showI].classList.remove("show");
                                } 
                            }
                        }

                        itemmenu.classList.toggle("show");
                    }, false);
                }
                
            }
        )(i);
    }
})();

function loadPage(url, cmd) {
    alert("url is " + url + ", cmd is " + cmd);
}

(function() {
    var item = getElementsByClassName("item");

    var itemLength = item.length;
    var url = "";
    var cmd = "";

    for( var i = 0; i < itemLength; i++ ) {
        (
            function(j) {
                var itemObj = item[j];

                if( itemObj.addEventListener ) {
                    itemObj.addEventListener('click', function() {
                        url = this.dataset.url;
                        cmd = this.dataset.cmd;
                        loadPage(url, cmd);
                    }, false);
                } else {
                    itemObj.attachEvent('onclick', function() {
                        url = this.dataset.url;
                        cmd = this.dataset.cmd;

                        loadPage(url, cmd);
                    }, false);
                }
            }
        )(i);
    }
})();
// Left Menu Click

var printIdx = 0;

var timer;

(function(){
    window.setTimeout(hitSlider, 0);

    timer = new IntervalTimer(hitSlider, 5000);
})();

function IntervalTimer(callback, nTime) {
    var interval;
    // 0 : 초기, 1 : running, 2 : stop, 3 : 재시작
    var state = 0;

    this.pause = function() {
        if(state != 1) return;
        window.clearInterval(interval);
        state = 2;
    };

    this.resume = function() {
        if(state != 2) return;
        state = 3;
        window.setTimeout(this.timeoutCallback, 0);
    }

    this.timeoutCallback = function() {
        if(state != 3) return;
        callback();
        interval = window.setInterval(callback, nTime);
        state = 1;
    }

    this.getInterval = function() {
        return interval;
    };

    this.getState = function() {
        return state;
    }; 

    if( state === 0) {
        if(!interval) {
            interval = window.setInterval(callback, nTime);
        }
        state = 1;
    } 
}

function play() {
    if( timer.getState() == 2 ) {
        timer.resume();
    } else {
        return;
    }
}

function pause() {
    if( timer.getState() == 1 ) {
        timer.pause();
    } else {
        return;
    }
}

function setPrintIdx(value) {
    
    if( timer.getState() == 1 ) {
        timer.pause();
        printIdx = value;
        timer.resume();
    } else {
        printIdx = value;
        var sliderList = getElementsByClassName("banner");
        var sliderDot = getElementsByClassName("dot");

        for( var i = 0, listLength = sliderList.length; i < listLength; i++ ) {
            obj = sliderList[i];
            dotObj = sliderDot[i];
    
            sliderDisplay(obj, (printIdx === i), dotObj);
        }
    }
}

function hitSlider() {
    var sliderList = getElementsByClassName("banner");
    var sliderDot = getElementsByClassName("dot");

    var listLength = sliderList.length;

    var obj;
    var dotObj;

    for( var i = 0; i < listLength; i++ ) {
        obj = sliderList[i];
        dotObj = sliderDot[i];

        (function(j) {
            dotObj.addEventListener('click', function() {
                setPrintIdx(j);
            }, false);
        })(i);

        sliderDisplay(obj, (printIdx === i), dotObj);
    }

    if( printIdx >= (listLength - 1) ) {
        printIdx = 0;
    } else {
        printIdx++;
    }
}

function sliderDisplay(obj, showFlag, dotObj) {
    var dotClassName = dotObj.className;

    if(showFlag) {
        dotClassName = dotClassName + " selecteddot";
        obj.style.display = 'block';
    } else {
        dotClassName = dotClassName.replace(/selecteddot/gi, "");
        obj.style.display = 'none';
    }

    dotObj.className = dotClassName;
}

(function() {
    var boardList =  getElementsByClassName("linked_new");
    var obj;

    for( var i = 0, len = boardList.length; i < len; i++ ) {
        (
            function(j) {
                obj = boardList[i];

                obj.addEventListener('click', function() {
                    showNews(j);
                }, false);
            }
        )(i);
    }
})();

function showNews(idx) {
    var boardList =  getElementsByClassName("linked_new");
    var obj;
    var data_views = "";

    for( var i = 0, len = boardList.length; i < len; i++ ) {
        obj = boardList[i];
        if( idx == i ) {
            obj.className = obj.className + " selected_view";
            data_views = obj.dataset.view;
        } else {            
            obj.className = obj.className.replace(/selected_view/gi, '');
        }
    }

    showNewsDiv(data_views);
}

function showNewsDiv(dataViews) {
    
    var tabboard = getElementsByClassName("tabboard");
    var obj;
    for( var i = 0, len = tabboard.length; i < len; i++ ) {
        obj = tabboard[i];
        if(obj.id === dataViews) {
            obj.className = obj.className.replace(/newshidden/gi, '');
            obj.className = obj.className + " newsvisible";
        } else {
            obj.className = obj.className.replace(/newsvisible/gi, '');
            obj.className = obj.className + " newshidden";
        }
    }

    newsArrayCount();
}

(function() {
    newsArrayCount();
})();