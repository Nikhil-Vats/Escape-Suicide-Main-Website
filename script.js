        window.onload = function() {
            document.getElementById("loading").style.display = "none" 
            document.getElementById("myDiv").style.display = "block";
        };

            var iconsList = document.getElementsByClassName('icons_list');
            var links = document.querySelectorAll('a[href$=".html"]');
            var sidenav = document.createElement('div');
            sidenav.id = 'sidenav';
            var sideNavList = document.createElement('ul');
            sidenav.appendChild(sideNavList);
            var close = document.createElement('img');
            close.id = 'closeButton';
            close.setAttribute('src','close_button.jpg');
            close.setAttribute('onclick','closeSideNav()');
            sidenav.appendChild(close);
            document.getElementsByTagName('body')[0].appendChild(sidenav);
            function myFunction(x) {
                if (x.matches) { // If media query matches
                    var logo = document.getElementById('logo');
                    logo.setAttribute('onclick', 'showSideNav()');
                    var icons = document.querySelectorAll('li[class^="icon"]');
                    for(var i=0;i<iconsList.length;i++) {
                        while(iconsList[i].firstChild) {
                            iconsList[i].removeChild(iconsList[i].firstChild);
                        }
                    }
                    
                    
                } else {
                    var logo = document.getElementById('logo');
                    logo.removeAttribute('onclick', 'showSideNav()');
                    if(document.getElementById('sidenav'))
                    document.getElementById('sidenav').style.visibility = 'hidden';
                    for(i=0;i<links.length;i++) {
                        if(i<3) {
                            iconsList[0].appendChild(links[i]);
                        }
                        else {
                            iconsList[1].appendChild(links[i]);
                        }
                    }
                }
            }

        var x = window.matchMedia("(max-width: 800px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction); // Attach listener function on state changes


        function showSideNav()  {       
             for(var i=0;i<links.length;i++)
                sideNavList.appendChild(links[i]);
            
             var sidenav = document.getElementById('sidenav');
             sidenav.style.visibility = 'visible';
             sidenav.style.left="-100vw";
                
             if(document.getElementById('sidenav').style.left=="-100vw")  {         //if sidenav is closed, open it
                sidenav.style.transitionDuration='0.3s';       //transition time
                sidenav.style.zIndex = '40';
                sidenav.style.left='0vw';                    //opening sidenav
            }
          
        }
        function closeSideNav () {
            var sidenav = document.getElementById('sidenav');
            sidenav.style.visibility = 'none';
            sidenav.style.zIndex = '-10';
            sidenav.style.left = '-100vw';
        }