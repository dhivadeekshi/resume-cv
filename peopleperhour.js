/*<!--
    PeoplePerHour Profile Widget
    The div#pph-hire me is the element
    where the iframe will be inserted.
    You may move this element wherever
    you need to display the widget
-->*/
document.write('\
<div id="pph-hireme"></div> \
<script type="text/javascript">\
(function(d, s) {\
    var useSSL = \'https:\' == document.location.protocol;\
    var js, where = d.getElementsByTagName(s)[0],\
    js = d.createElement(s);\
    js.src = (useSSL ? \'https:\' : \'http:\') +  \'//www.peopleperhour.com/hire/2904406748/3520042.js?width=300&height=135&orientation=vertical&theme=dark&rnd=\'+parseInt(Math.random()*10000, 10);\
    try { where.parentNode.insertBefore(js, where); } catch (e) { if (typeof console !== \'undefined\' && console.log && e.stack) { console.log(e.stack); } }\
}(document, \'script\'));\
</script>');