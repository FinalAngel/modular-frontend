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

/* independent gallery function */

function gallery(index) {
    var nodeList = Array.prototype.slice.call( document.getElementsByClassName('gallery')[0].children );
    nodeList[index].classList = 'active';
}

/* independent pagination function */

function pagination(index) {
    var nodeList = Array.prototype.slice.call( document.getElementsByClassName('pagination')[0].children );
    nodeList[index].classList = 'active';
}
