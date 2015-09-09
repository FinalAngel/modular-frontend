/**
 * Created by Luzius on 09.09.2015.
 */
/*  ############################################################################
 Excercise 4
 ###########
 - Create one module which sets the "active" class to the current selected
 "gallery" item "li".
 - Create another module which does the same for the "pagination"
 - Pagination will trigger a gallery change, try to communicate with
 "gallery" without altering each others code (hint event dispatching)

 <ul class="gallery">
 <li><img src="..."></li>
 <li><img src="..."></li>
 <li><img src="..."></li>
 </ul>

 <ol class="pagination">
 <li><a href="#">1</a></li>
 <li><a href="#">1</a></li>
 <li><a href="#">1</a></li>
 </ol>
 */

var inGalery = false;
var inPagination = false;

function gallery() {
    this.gallery = $.('.gallery');
    this.gallery.eq(index).setClass('active');

}

/* independent pagination function */

function pagination(index) {
    this.pagination = $.('.pagination');
    this.pagination.eq(index).setClass('active');


}
