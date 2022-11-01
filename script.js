// display search box
let searchIcon = document.getElementById("searchIcon");
let searchContainer = document.getElementById("searchContainer");
searchIcon.addEventListener("click", (e) => {
  searchContainer.style.width = "245px";
  searchContainer.style.height = "40px";
  searchContainer.style.transform = "scale(100%,100%)";
  searchContainer.style.opacity = "1";

  searchIcon.style.display = "none";

  let cross = document.getElementById("cross");
  cross.removeAttribute("id");
  cross.setAttribute("id", "crossForClose");

  // remove search box with crossForClose
  let crossForClose = document.getElementById("crossForClose");
  crossForClose.addEventListener("click", () => {
    crossForClose.removeAttribute("id");
    cross.setAttribute("id", "cross");
    searchIcon.style.display = "block";

    searchContainer.style.width = "0px";
    searchContainer.style.height = "0px";
    searchContainer.style.transform = "scale(0%,0%)";
    searchContainer.style.opacity = "0";
  });
});

// show navigation bar after scroll

window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  // console.log(scroll)
  let navigationBar = document.querySelector(".navigationBar");
  if (scroll > 410) {
    navigationBar.style.top = "55px";
    navigationBar.classList.add("shadowForNavigationBar");
  } else if (scroll < 410) {
    navigationBar.style.top = "-45px";
    navigationBar.classList.remove("shadowForNavigationBar");
  }

  // if else for icon to go to top
  let goToTop = document.querySelector(".goToTop");
  ifElseForIconToGoTop();
  function ifElseForIconToGoTop() {
    if (scroll >= 560) {
      goToTop.style.display = "block";

      goToTop.style.opacity = "1";
    } else {
      goToTop.style.opacity = "0";

      goToTop.style.display = "none";
    }
  }
});

// change value of radioForSlide(women or men) with arrows of slider

let leftArrowOfSlider = document.getElementById("leftArrowOfSlider");
let rightArrowOfSlider = document.getElementById("rightArrowOfSlider");
leftArrowOfSlider.addEventListener("click", getSliderItemsWithArrows);
rightArrowOfSlider.addEventListener("click", getSliderItemsWithArrows);

// function for get sliders items with Arrows
function getSliderItemsWithArrows() {
  let radioForSlide = document.getElementsByClassName("radioForSlide");

  if (radioForSlide[0].checked == true) {
    radioForSlide[1].checked = true;
  } else {
    radioForSlide[0].checked = true;
  }
  slideFunctionWithRadio();
}

// making slider
let radioForSlide = document.getElementsByClassName("radioForSlide");
for (const iterator of radioForSlide) {
  iterator.addEventListener("click", slideFunctionWithRadio);
}

// upper slider function with raido
slideFunctionWithRadio();
function slideFunctionWithRadio() {
  let radioForSlideChecked = document.querySelector(".radioForSlide:checked");

  let boyImage = document.getElementById("boyImage");
  let girsImage = document.getElementById("girsImage");

  let labelForWomenSlide = document.getElementById("labelForWomenSlide");
  let labelForMenSlide = document.getElementById("labelForMenSlide");

  let headingInSlider = document.getElementsByClassName("headingInSlider");
  let subHeadingInSlider =
    document.getElementsByClassName("subHeadingInSlider");

  let shopNowDivInSlider =
    document.getElementsByClassName("shopNowDivInSlider");

  if (radioForSlideChecked.value == "women") {
    setTimeout(() => {
      boyImage.style.display = "none";
    }, 300);
    girsImage.style.display = "block";

    girsImage.style.opacity = "1";
    boyImage.style.opacity = "0";

    labelForWomenSlide.style.background = "#ed0f0f";
    labelForMenSlide.style.background = "white";

    setTimeout(() => {
      headingInSlider[0].style.left = "0px";
      subHeadingInSlider[0].style.left = "0px";
      subHeadingInSlider[0].style.opacity = "1";
      shopNowDivInSlider[0].style.opacity = "1";
      shopNowDivInSlider[0].style.transform = "scaleY(1)";
    }, 1);
    headingInSlider[1].style.left = "80px";

    subHeadingInSlider[1].style.left = "80px";

    subHeadingInSlider[1].style.opacity = "0";

    headingInSlider[0].style.opacity = "1";
    headingInSlider[1].style.opacity = "0";

    shopNowDivInSlider[1].style.opacity = "0";

    shopNowDivInSlider[1].style.transform = "scaleY(0)";
  } else {
    setTimeout(() => {
      girsImage.style.display = "none";
    }, 300);
    boyImage.style.display = "block";

    girsImage.style.opacity = "0";
    setTimeout(() => {
      boyImage.style.opacity = "1";
    }, 1);

    labelForWomenSlide.style.background = "white";
    labelForMenSlide.style.background = "#ed0f0f";

    headingInSlider[0].style.left = "80px";
    setTimeout(() => {
      headingInSlider[1].style.left = "0px";
      subHeadingInSlider[1].style.left = "0px";
      subHeadingInSlider[1].style.opacity = "1";
      shopNowDivInSlider[1].style.opacity = "1";
      shopNowDivInSlider[1].style.transform = "scaleY(1)";
    }, 1);

    subHeadingInSlider[0].style.left = "80px";

    subHeadingInSlider[0].style.opacity = "0";

    headingInSlider[0].style.opacity = "0";
    headingInSlider[1].style.opacity = "1";

    shopNowDivInSlider[0].style.opacity = "0";

    shopNowDivInSlider[0].style.transform = "scaleY(0)";
  }
}

// on mouse out, slider automaticly run
runslider();
function runslider() {
  let automaticlyRunSLider = setInterval(() => {
    getSliderItemsWithArrows();
    // console.log('afdsdf')
  }, 4000);

  // on mouse enter, slider will stop
  let slider = document.getElementById("slider");
  slider.addEventListener("mouseenter", () => {
    clearInterval(automaticlyRunSLider);
  });
}

// restart auto slider
slider.addEventListener("mouseleave", () => {
  runslider();
});


// making slider with arrows for other company logos
let leftArrowOfAnotherCompanyLogo = document.getElementById('leftArrowOfAnotherCompanyLogo')
leftArrowOfAnotherCompanyLogo.addEventListener('click', slideLeftAllLogosFunction1)
let rightArrowOfAnotherCompanyLogo = document.getElementById('rightArrowOfAnotherCompanyLogo')
rightArrowOfAnotherCompanyLogo.addEventListener('click', slideRightAllLogosFunction1)

// this will increase and decrease with slider click slider left and right
// manually changeing code on another functions..........
let slideLeftWidthOfLogoSlider = 0;




// function for right arrow of logo slider
function slideRightAllLogosFunction1(e){
  // geting children to get width of that child
  let oneChild = e.target.parentNode.children[1].firstElementChild;
  let widthOfOneChild = oneChild.offsetWidth;
  // console.log(widthOfOneChild)

  // getting all children to slide
  let allChild = e.target.parentNode.children[1].children
  
  // manually changeing code on another functions...........
  totalWidthForSlide = (widthOfOneChild * allChild.length) - (widthOfOneChild * 6)
  // console.log(totalWidthForSlide)
  
  
  
  
  slideLeftWidthOfLogoSlider -= widthOfOneChild;
  // console.log(slideLeftWidthOfLogoSlider)
  let PositiveSlideLeftWidthOfLogoSlider = Math.abs(slideLeftWidthOfLogoSlider);
  if(PositiveSlideLeftWidthOfLogoSlider > totalWidthForSlide){
    slideLeftWidthOfLogoSlider = 0;
  }
  
  
  slideLeftAllLogosFunction2(allChild)
  
}

// function for left arrow of logo slider
function slideLeftAllLogosFunction1(e){
  // geting children to get width of that child
  let oneChild = e.target.parentNode.children[1].firstElementChild;
  let widthOfOneChild = oneChild.offsetWidth;

  // getting all children to slide
  let allChild = e.target.parentNode.children[1].children

  // manually changeing code on another functions...........
  totalWidthForSlide = (widthOfOneChild * allChild.length) - (widthOfOneChild * 6)
  // console.log(totalWidthForSlide)
  
  
  
  slideLeftWidthOfLogoSlider += widthOfOneChild;
  // console.log(slideLeftWidthOfLogoSlider)
  
  if(slideLeftWidthOfLogoSlider > 0){
    slideLeftWidthOfLogoSlider = -Math.abs(totalWidthForSlide);
  }
  
  
  
  slideLeftAllLogosFunction2(allChild)
}


function slideLeftAllLogosFunction2(allChild){
  for (const iterator of allChild) {
    // console.log(iterator)
    iterator.style.left = slideLeftWidthOfLogoSlider +'px' 
    
  }

}


// making slider for new products
let rightArrowOfNewProducts = document.getElementById('rightArrowOfNewProducts')
rightArrowOfNewProducts.addEventListener('click', slideRightAllNewProductsFuncton1)

let leftArrowOfNewProducts = document.getElementById('leftArrowOfNewProducts')
leftArrowOfNewProducts.addEventListener('click', slideLeftAllNewProductsFuncton1)



let slideAbsoluteLeft = 0;

// function for right arrow
function slideRightAllNewProductsFuncton1(e){
  // geting slider div
  let biggerDiv = e.target.parentNode.children[1].offsetWidth 
  let sliderDiv = e.target.parentNode.children[1].firstElementChild
  let child = sliderDiv.firstElementChild
  let childWidth = child.clientWidth 
  
  slideAbsoluteLeft -= childWidth;

  let slideWidth = - Math.abs( sliderDiv.offsetWidth - biggerDiv + 10);
  
  
  if(slideAbsoluteLeft < slideWidth){
    slideAbsoluteLeft = 0
  }

  slideRightAllNewProductsFuncton2(sliderDiv)
}


// function for left arrow
function slideLeftAllNewProductsFuncton1(e){
   // geting slider div
   let biggerDiv = e.target.parentNode.children[1].offsetWidth 
   let sliderDiv = e.target.parentNode.children[1].firstElementChild
   let child = sliderDiv.firstElementChild
   let childWidth = child.clientWidth 
   
   slideAbsoluteLeft += childWidth;
 
   let slideWidth = - Math.abs( sliderDiv.offsetWidth - biggerDiv + 10);
   
   if(slideAbsoluteLeft > 0){
     slideAbsoluteLeft = slideWidth ;
   }
 
   slideRightAllNewProductsFuncton2(sliderDiv)
  

}

function slideRightAllNewProductsFuncton2(sliderDiv){
  sliderDiv.style.left = slideAbsoluteLeft +'px';

}


// featured products slider
let rightArrowOfFeaturedProducts = document.getElementById('rightArrowOfFeaturedProducts')
rightArrowOfFeaturedProducts.addEventListener('click', slideRightAllFeaturedProductsFuncton1)

let leftArrowOfFeaturedProducts = document.getElementById('leftArrowOfFeaturedProducts')
leftArrowOfFeaturedProducts.addEventListener('click', slideLeftAllFeaturedProductsFuncton1)


let slideAbsoluteLeftForfeaturedProducts = 0;

// function for right arrow
function slideRightAllFeaturedProductsFuncton1(e){
  // geting slider div
  let biggerDiv = e.target.parentNode.children[1].offsetWidth 
  let sliderDiv = e.target.parentNode.children[1].firstElementChild
  let child = sliderDiv.firstElementChild
  let childWidth = child.clientWidth 
  
  slideAbsoluteLeftForfeaturedProducts -= childWidth;

  let slideWidth = - Math.abs( sliderDiv.offsetWidth - biggerDiv + 10);
  
  
  if(slideAbsoluteLeftForfeaturedProducts < slideWidth){
    slideAbsoluteLeftForfeaturedProducts = 0
  }

  slideRightAllFeaturedProductsFuncton2(sliderDiv)
}


// function for left arrow
function slideLeftAllFeaturedProductsFuncton1(e){
   // geting slider div
   let biggerDiv = e.target.parentNode.children[1].offsetWidth 
   let sliderDiv = e.target.parentNode.children[1].firstElementChild
   let child = sliderDiv.firstElementChild
   let childWidth = child.clientWidth 
   
   slideAbsoluteLeftForfeaturedProducts += childWidth;
 
   let slideWidth = - Math.abs( sliderDiv.offsetWidth - biggerDiv + 10);
   
   if(slideAbsoluteLeftForfeaturedProducts > 0){
     slideAbsoluteLeftForfeaturedProducts = slideWidth ;
   }
 
   slideRightAllFeaturedProductsFuncton2(sliderDiv)
  

}

function slideRightAllFeaturedProductsFuncton2(sliderDiv){
  sliderDiv.style.left = slideAbsoluteLeftForfeaturedProducts +'px';

}


// team members div

// making slider for images
let rightSlideBoxOfTeamImageBox = document.getElementById('rightSlideBoxOfTeamImageBox')
rightSlideBoxOfTeamImageBox.addEventListener('click', rightSlideTeamImagesFunction)
let leftSlideBoxOfTeamImageBox = document.getElementById('leftSlideBoxOfTeamImageBox')
leftSlideBoxOfTeamImageBox.addEventListener('click', leftSlideTeamImagesFunction)

// parent of all
let imagesOfTeamMembers = document.getElementById('imagesOfTeamMembers')

// slider div is here
let smallBoxOfImagesOfTeamMembers = document.querySelector('.smallBoxOfImagesOfTeamMembers')

let direction;

// left slide funciton
function leftSlideTeamImagesFunction(){
  
  let firstChild = smallBoxOfImagesOfTeamMembers.firstElementChild;
  let firstChildWidth = firstChild.clientWidth
  
  smallBoxOfImagesOfTeamMembers.style.left = firstChildWidth + 'px';
  
  
  direction = 1;

  imagesOfTeamMembers.style.justifyContent = 'flex-end'
  smallBoxOfImagesOfTeamMembers.prepend(smallBoxOfImagesOfTeamMembers.lastElementChild)
  
  let memberImage = document.querySelectorAll('.memberImage Img')
  for (const iterator of memberImage) {
    
    // console.log(iterator.id
    iterator.id = ''
  }
  
  memberImage[1].id = 'bigImageOfTeamMember'
  
}

// right slide funciton
function rightSlideTeamImagesFunction(){
  
  
  
  let firstChild = smallBoxOfImagesOfTeamMembers.firstElementChild;
  let firstChildWidth = firstChild.clientWidth
  
  smallBoxOfImagesOfTeamMembers.style.left = -firstChildWidth + 'px';
  
  
  direction = -1;
  imagesOfTeamMembers.style.justifyContent = 'flex-start'
  

  let memberImage = document.querySelectorAll('.memberImage Img')
  for (const iterator of memberImage) {
    
    // console.log(iterator.id)
    iterator.id = ''
  }
  
  memberImage[2].id = 'bigImageOfTeamMember'
  
}


// slider of images
smallBoxOfImagesOfTeamMembers.addEventListener('transitionend', sliderFunction)

function sliderFunction(){
  imagesOfTeamMembers.style.justifyContent = 'flex-start'
  if(direction == -1){
    smallBoxOfImagesOfTeamMembers.appendChild(smallBoxOfImagesOfTeamMembers.firstElementChild)
    smallBoxOfImagesOfTeamMembers.appendChild(smallBoxOfImagesOfTeamMembers.firstElementChild)
    smallBoxOfImagesOfTeamMembers.appendChild(smallBoxOfImagesOfTeamMembers.firstElementChild)
    
    
    
   
    
  }
  
  smallBoxOfImagesOfTeamMembers.style.transition = 'none'
  smallBoxOfImagesOfTeamMembers.style.left = '0px'
  setTimeout(() => {
    smallBoxOfImagesOfTeamMembers.style.transition = '.5s'
    
  }, );

  
  
}


// function for team pera and name.. funtion is in html on left and right
let nextOrPrev = 0;
function showNamePera(x){
  
  nextOrPrev += x;

  // console.log(nextOrPrev)
  if(nextOrPrev > 2){
    nextOrPrev = -1
  }
  else if(nextOrPrev < -1){
    nextOrPrev = 2
  }

  
  
  showNamePera2()
}

function showNamePera2(){
  // for pera of team member
  let peraForTeamMember = document.querySelectorAll('.peraForTeamMember')
  for (const iterator of peraForTeamMember) {
    iterator.style.opacity = '0'
  }
  peraForTeamMember[nextOrPrev + 1].style.opacity = '1'
  
  // for name and post
  let nameAndPostOfTeamMember = document.querySelectorAll('.nameAndPostOfTeamMember')
  for (const iterator of nameAndPostOfTeamMember) {
    iterator.style.opacity = '0'
  }
  nameAndPostOfTeamMember[nextOrPrev + 1].style.opacity = '1'
  
  
}



// our blog left and right arrow slide
rightArrowOfBlogContainer = document.getElementById('rightArrowOfBlogContainer')
rightArrowOfBlogContainer.addEventListener('click', rightSlideBlogContainerFunction)
leftArrowOfBlogContainer = document.getElementById('leftArrowOfBlogContainer')
leftArrowOfBlogContainer.addEventListener('click', leftSlideBlogContainerFunction)

// variable for contain value of slde
let slideBlogWidth = 0;

// function for rightslide blog container
function rightSlideBlogContainerFunction(e){
  let showContainerOfBlog = e.target.parentNode.children[1];
  let slideContainerOfBlog = showContainerOfBlog.firstElementChild;
  let slideContainerOfBlogFirstChildWidth = slideContainerOfBlog.firstElementChild.clientWidth;

  let WidthForSlidingOfBlog = slideContainerOfBlogFirstChildWidth  + 30;   // +30 = 15 + 15 (margins)
  let totalWidthForSlideOfBlog = - Math.abs( slideContainerOfBlog.clientWidth - showContainerOfBlog.clientWidth + 10);

  slideBlogWidth -= WidthForSlidingOfBlog;
  // console.log(slideBlogWidth)
  // console.log(totalWidthForSlideOfBlog)

  if(slideBlogWidth < totalWidthForSlideOfBlog){
    slideBlogWidth = 0
  }
  

  // slide the slide container of blog
  slideContainerOfBlog.style.left = slideBlogWidth + 'px';
  
 
}

// function for left slide blog container
function leftSlideBlogContainerFunction(e){
  let showContainerOfBlog = e.target.parentNode.children[1];
  let slideContainerOfBlog = showContainerOfBlog.firstElementChild;
  let slideContainerOfBlogFirstChildWidth = slideContainerOfBlog.firstElementChild.clientWidth;

  let WidthForSlidingOfBlog = slideContainerOfBlogFirstChildWidth  + 30;   // +30 = 15 + 15 (margins)
  let totalWidthForSlideOfBlog = - Math.abs( slideContainerOfBlog.clientWidth - showContainerOfBlog.clientWidth + 3);

  slideBlogWidth += WidthForSlidingOfBlog;
  // console.log(slideBlogWidth)
  // console.log(totalWidthForSlideOfBlog)

  if(slideBlogWidth > 0){
    slideBlogWidth = totalWidthForSlideOfBlog;
  }
  

  // slide the slide container of blog
  slideContainerOfBlog.style.left = slideBlogWidth + 'px';
}



// blog images show box....
let backgroundOfBlogImages = document.querySelector('.backgroundOfBlogImages')

let showImage = document.querySelectorAll('.showImage')
for (let key = 0; key < showImage.length; key++) {
  const element = showImage[key];
  
  
  // show images box
  element.addEventListener('click', showImageOfElement)

  function showImageOfElement(){
    backgroundOfBlogImages.style.display = 'block'
    setTimeout(() => {
      
      backgroundOfBlogImages.style.opacity = '1'
    }, );
  
 

  // showing 0th image first
  nextOrPrevBlogImage(key)
  }
}




// images of blog container
let BlogImagesContainerWithArrowImages = document.querySelectorAll('.BlogImagesContainerWithArrow img')

// number of current image 
let imageNumber = document.querySelector('.imageNumber span')

// total images of blog
let totalImagesOfBlog = document.querySelector('.totalImagesOfBlog')


let leftArrowOfBlogImagesShowModel = document.getElementById('leftArrowOfBlogImagesShowModel')
let rightArrowOfBlogImagesShowModel = document.getElementById('rightArrowOfBlogImagesShowModel')


// variable who change after click
let showingImageOfBlog = 0;

// function start on click and this is in html
function nextOrPrevBlogImage(x){
  showingImageOfBlog += x;

  imageNumber.innerHTML = showingImageOfBlog + 1;
  totalImagesOfBlog.innerHTML = BlogImagesContainerWithArrowImages.length;
  
  // for right arrow show or hide
  if(showingImageOfBlog == BlogImagesContainerWithArrowImages.length - 1){
    rightArrowOfBlogImagesShowModel.style.transition = 'none'
    rightArrowOfBlogImagesShowModel.style.zIndex = '-1'
  }
  else{
    rightArrowOfBlogImagesShowModel.style.transition = '.7s'
    rightArrowOfBlogImagesShowModel.style.zIndex = '100'
    
  }
  
  // for left arrow show or hide
  if(showingImageOfBlog == 0){
    leftArrowOfBlogImagesShowModel.style.transition = 'none'
    leftArrowOfBlogImagesShowModel.style.zIndex = '-1'
    
  }
  else{
    leftArrowOfBlogImagesShowModel.style.transition = '.7s'
    leftArrowOfBlogImagesShowModel.style.zIndex = '100'
    
  }

  nextOrPrevBlogImage2()
  
}


function nextOrPrevBlogImage2(){
  for (const iterator of BlogImagesContainerWithArrowImages) {
    
    iterator.style.opacity = '0'
    iterator.style.transition = 'none'
  }

  setTimeout(() => {
    BlogImagesContainerWithArrowImages[showingImageOfBlog].style.transition = '1s'
    BlogImagesContainerWithArrowImages[showingImageOfBlog].style.opacity = '1'
  }, );
}

// close the blog images box
let closeOfBlog = document.getElementById('closeOfBlog')
closeOfBlog.addEventListener('click', closeBlogImagesShow)

// and close the blog images box with click out of image box........................................it is not working
let BlogImagesContainerWithArrow = document.querySelector('.BlogImagesContainerWithArrow')
// console.log(BlogImagesContainerWithArrow.children)
BlogImagesContainerWithArrow.addEventListener('blur', ()=>{
  console.log('blur')
})

// function for close blog images
function closeBlogImagesShow(){
  backgroundOfBlogImages.style.opacity = '0'
  setTimeout(() => {
      backgroundOfBlogImages.style.display = 'none'
      
    },500 );

    showingImageOfBlog = 0;
}

