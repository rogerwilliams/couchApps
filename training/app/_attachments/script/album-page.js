var AlbumPageController = function() {
 
    function handleView()
    {
        // Watch for bound hide of page to clear from cache.
        var docId = $("#albumcontent").data("identity");
        var albumPage = $(document.getElementById("_show/album/" + docId));
        albumPage.bind( "pagehide", handlePageViewHide );
    }
 
    function handlePageViewHide()
    {
        var docId = $("#albumcontent").data("identity");
        var albumPageCache =  $(document.getElementById("_show/album/" + docId));
        albumPageCache.unbind( "pagehide", handlePageViewHide );
        albumPageCache.empty();
        albumPageCache.remove();
    }
 
    return {
        initialize : function() {
            $("div[data-role='page']").live( "pageshow", function() {
                $("div[data-role='page']").die( "pageshow" );
                handleView();
            });
        }
    };
}();
 
function handlePageViewReady()
{
    AlbumPageController.initialize();
}
$().ready( handlePageViewReady );