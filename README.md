# About project

It's an example of the landing page for your portfolio.
This page (with modal windows) was created using Less preprocessor, JQuery for events and Slick library for slider.
Also this page was adapted for different width values: 380px, 565px, 767px, 991px and 1199px.

Psd and xd layouts are in the folder `psd`.


# Solving Slick slider adaptive (resize) problem

Slick slider has some features when using flex. If it is inside any block that has the property `display: flex`, then it begins to expand exponentially in width. And when you try to change the screen size the slider does not adapt to it.

In this project the slider is used inside the modal window.
```html
<div class="modal">
  <div class="modal__dialog>
    
    <div class="modal-work">
      <div class="modal-work__preview">
        
        <div data-slider="slick"></div>
        
      </div>
    </div>
    
  </div>
</div>
```
`.modal` has the property `display: flex`. This allows to center the block `.modal__dialog` on the screen.

To solve an adaptive problem the outer block should have a width (relative or fixed). In this example the block `.modal` has a width equal to `width: 100%`.

The next block (`.modal__dialog`) should have a width equal to `width: 100%` __strictly__. You may limit this block using the additional property `max-width`.

Images inside the slider should be adaptive also:
```css
display: block;
max-width: 100%;
height: auto;
```

__Importantly:__ only the first two blocks solve the problem (with the property `display: flex` and the next block). The first block should be sized (relative or fixed). The next block should have a relative width (as an option `width: 100%`). In this example the slider has a deeper nesting. So its size does not solve the problem.


# Links

For more information see following links:

1. Course on creating a landing page (author Дмитрий Валак, August 2019, for russian speakers):
https://www.youtube.com/watch?v=Cyr0fFYrwHU&list=PLoq3Accf02PV3dIFVeYnqp3FSfyR2u0gU

2. Slick slider library:
https://kenwheeler.github.io/slick/

3. Download JQuery:
https://jquery.com/

4. Icons for this project:
https://www.flaticon.com/

5. Free text editor "Brackets" that I used:
http://brackets.io/
Primarily install extensions for it: Less AutoCompile (for Less files compilation) and Emmet.
