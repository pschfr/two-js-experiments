<h1>Generative Art</h1>
<p>Various visual experiments with code.</p>

<h2>Patterns</h2>
<p>A couple of patterns I was able to generate with the <a href="two.js.org">Two.js library</a> using the same general algorithm with some tweaking: a simple triple-nested loop (i > j > k), with i being the number of shapes across, j as the number of shapes up and down, and k as the radius*. k is nested inside i and j to create a 'stacking' effect, but it can be removed and the value can be hard-coded, if needed.<br><br>
  
From there, I was able to make a decent variety of generative designs. Since Two automatically generates these as SVGs, they can be animated or made interactive with JavaScript (this is pretty simple with Two's built-in animation loop). The six smaller patterns directly below this paragraph don't have an associated .js file, but the 4 "special" patterns link to their respective .js files (just in case anyone is interested). Feel free to use and take whatever you want from this.<br><br>
*or, radius of the largest shape, if stacked</p>

<div style="display:inline-block">
  <img height="250px" width="250px" src="two-js/imgs/pattern1.png" alt="pattern">
  <img height="250px" width="250px" src="two-js/imgs/pattern9.png" alt="pattern">
  <img height="250px" width="250px" src="two-js/imgs/pattern7.png" alt="pattern">
  <img height="250px" width="250px" src="two-js/imgs/pattern8.png" alt="pattern">
  <img height="250px" width="250px" src="two-js/imgs/pattern3.png" alt="pattern">
    <img height="250px" width="250px" src="two-js/imgs/pattern6.png" alt="pattern">


  
<h3>Faces (<a href="https://github.com/anokhee/creative_coding/tree/master/two-js/pattern-gen/faces.js">two-js/pattern-gen/faces.js</a>)</h3> 
  <img height="500px" width="500px" src="two-js/imgs/special-pattern-2.png" alt="pattern">
  
<h3>Ladybugs (<a href="https://github.com/anokhee/creative_coding/tree/master/two-js/pattern-gen/ladybugs.js">two-js/pattern-gen/ladybugs.js</a>)</h3> 
  <img height="500px" width="500px" src="two-js/imgs/special-pattern-1.png" alt="pattern">
  
<h3>Wave (<a href="https://github.com/anokhee/creative_coding/tree/master/two-js/pattern-gen/waves.js">two-js/pattern-gen/waves.js/</a>)</h3> 
  <img height="500px" width="500px" src="two-js/imgs/special-pattern-3.png" alt="pattern">

<h3>Bismuth (<a href="https://github.com/anokhee/creative_coding/tree/master/two-js/pattern-gen/bismuth.js">two-js/pattern-gen/bismuth.js</a>)</h3> 
  <img height="500px" width="500px" src="two-js/imgs/special-pattern-4.png" alt="pattern">
  

<h2>Face Generator - <a href="http://anokhee.github.io/v2">Live</a></h2>
<div style="display:inline-block">
  <img height="200px" width="200px" src="two-js/imgs/face1.png" alt="Face 1">
  <img height="200px" width="200px" src="two-js/imgs/face2.png" alt="Face 2">
  <img height="200px" width="200px" src="two-js/imgs/face3.png" alt="Face 3"><br>
  <img height="200px" width="200px" src="two-js/imgs/face4.png" alt="Face 4">
  <img height="200px" width="200px" src="two-js/imgs/face5.png" alt="Face 5">
  <img height="200px" width="200px" src="two-js/imgs/face6.png" alt="Face 6">
</div>

<h2>Bullseye - <a href="http://anokhee.github.io/bullseye">Live</a></h2>
<div style="display:inline-block">
  <img height="300px" width="300px" src="two-js/imgs/bullseye-light.png" alt="light">
  <img height="300px" width="300px" src="two-js/imgs/bullseye-dark.png" alt="dark">
</div>
