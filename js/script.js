$(document).ready(function() {
        $("header").remove();
        $("footer").remove();
        $("<link rel='icon' href="+window.location.origin+"/wp-content/plugins/mmrs/img_logo/favicon-32x32.png type='image/png' sizes='32x32'>").prependTo("head");
        var insert = "<div class='entete-mmrs'><img src="+window.location.origin+"/wp-content/plugins/mmrs/img_logo/mmrs.jpeg class='logo-mmrs logo'>";
            // insert += "<h1 class='titre'>Ministère des Mines et des Ressources Stratégiques</h1>";
            insert += "<img src="+window.location.origin+"/wp-content/plugins/mmrs/img_logo/republic.png class='logo-republic logo'></div>";
            insert +="<nav class='menu-mmrs-nav'></nav>";
        $(insert).insertBefore("#id-menu-mmrs");
        $("#id-menu-mmrs").prependTo(".menu-mmrs-nav");
var slideshow = "<div id='jssor_1' style='position:relative;margin:0 auto;top:10px;left:0px;width:980px;height:380px;overflow:hidden;visibility:hidden;'>";
        slideshow += "<div data-u='loading' class='jssorl-004-double-tail-spin' style='position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);'>";
            slideshow += "<img style='margin-top:-19px;position:relative;top:50%;width:38px;height:38px;' src="+window.location.origin+"/wp-content/plugins/mmrs/slide_enjana/img/double-tail-spin.svg />";
        slideshow += "</div>";
        slideshow += "<div data-u='slides' style='cursor:default;position:relative;top:0px;left:0px;width:980px;height:380px;overflow:hidden;'>";
            slideshow += "<div data-fillmode='0' data-idle='2000'>";
                slideshow += "<img data-u='image' src="+window.location.origin+"/wp-content/plugins/mmrs/slide_enjana/img/0_2548www70d178.jpg />";
                slideshow += "<div class='texte_slide' style='left:115px;top:282px;width:769px;height:62px;position:absolute;'>Ministère des Mines et des Ressources Stratégiques</div>";
            slideshow += "</div>";
            slideshow += "<div>";
                slideshow += "<img data-u='image' src="+window.location.origin+"/wp-content/plugins/mmrs/slide_enjana/img/0_254870d178.jpg />";
                slideshow += "<div class='texte_slide' style='left:96px;top:306px;width:769px;height:62px;position:absolute;'>Ministère des Mines et des Ressources Stratégiques</div>";
            slideshow += "</div>";
            slideshow += "<div>";
                slideshow += "<img data-u='image' src="+window.location.origin+"/wp-content/plugins/mmrs/slide_enjana/img/182269017_260cccccc392695831840_6147523165983221301_n.jpg />";
                slideshow += "<div class='texte_slide' style='left:103px;top:11px;width:769px;height:62px;position:absolute;'>Ministère des Mines et des Ressources Stratégiques</div>";
            slideshow += "</div>";
            slideshow += "<div>";
                slideshow += "<img data-u='image' src="+window.location.origin+"/wp-content/plugins/mmrs/slide_enjana/img/q.jpg />";
                slideshow += "<div class='texte_slide' style='left:114px;top:309px;width:769px;height:62px;position:absolute;'>Ministère des Mines et des Ressources Stratégiques</div>";
            slideshow += "</div>";
        slideshow += "</div>";
        slideshow += "<div data-u='navigator' class='jssorb031' style='position:absolute;bottom:16px;right:16px;' data-autocenter='1' data-scale='0.5' data-scale-bottom='0.75'>";
            slideshow += "<div data-u='prototype' class='i' style='width:13px;height:13px;'>";
                slideshow += "<svg viewbox='0 0 16000 16000' style='position:absolute;top:0;left:0;width:100%;height:100%;'>";
                    slideshow += "<circle class='b' cx='8000' cy='8000' r='5800'></circle>";
                slideshow += "</svg>";
            slideshow += "</div>";
        slideshow += "</div>";
    slideshow += "</div>";
    slideshow +="<script type='text/javascript'>jssor_1_slider_init();</script>"
    $(".mon_header").append(slideshow);
});