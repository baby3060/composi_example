// Top Menu Click
function topClick(cmd) {
    alert(cmd);
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