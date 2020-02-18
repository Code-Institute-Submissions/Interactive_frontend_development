# Interactive Frontend Development
<i>Interactive Front end development Project Milestone. </i>

<p>
My Milestone project is an interactive dashboard bassed off a dataset that was retrieved from Kaggle.

From the moment I started this module I Knew that this is the project that I was going to do.
The potentional of svg to minuplate large volumes of meaningless strings of letters and numbers and turn it into functional,
interesting and interactive charts and diagrams is virtually unlimited from my point of view. Where upon the click of the mouse you can filter one chart
and the rest follows suit and amends themselves to recalcaluate their own values lends it's self more to magic than computer science.
So, naturally, I set out to find exactly how this worked and the things that could be done.

For this I picked a subject that I know a little bit about and now all I needed was a dataset to match.
My goal was to find a dataset of either exoplanets (planets outsite out solar system) or a dataset of known stars and arange the graphs arround the data.
I had intended on getting my wireframes and my questions prepaired before I got the dataset but I soon realised that I may not get to answer all of my questions with the one dataset.

I soon scrapped that idea and draw up a plan starting with the end goal and working backwards with each step telling me what I needed to get and what I needed to do to to get there.

I started with:

<ul>

<li>My End Goal - 
Responsive charts/graphs</li>
<li>To get there I needed
formulas and functions and place holders for the graphs in my code</li>
<li>which needed
a wireframe mock up of my design to sugest where everything was going to go</li>
<li>which relys on
questions that I needed data to answer</li>
<li>to answer those questions I found
a plantary csv dataset</li>

</ul>
Which gave me a plan of action to incramentally achieve my goal by setting a small steps that I can easily follow.

</p>
<br>
<p>
    So, I found my start point, I needed a dataset. I had looked at 3 different datasets all of which can be found on Kaggle.com,
    "Open ExoPlanet Catalogue" by Megan Risdal, "ExoPlanets database" by Eduardo Wojcikiewicz  and "Kepeler ExoPlanet Search Results" By NASA. I ended up going with the 
    "Open ExoPlanet Catalogue" by Megan Risdal, due to the fact that it was the most complete cataloge, it had all the data points that i needed to answer all my questions.
</p>
 
<p>
    The next step I needed to do was to get the questions that I neeed to answer. I had a number of questions that I wanted to answer. Naturaly there were some that I had to cut
    because of time constraints, namely, "Distance/Year discovered" where it would show that it would show a direct correlaction between how fara away was with the star and 
    when it was discovered, "distance/star temprature" where it would show that the hotter and therefore brighter the star the harder it is to spot planets arround it.
    I setteled on "What are the names of the Planets Discovered so far?", "How where the planets caragorised? IE confirmed planets, non-confirmed ect", 
    "how many planets where discovered each year?", "By what method were each planets discovered?" and "How many Records are being displayed at any time?"</p>
 
<p>
    With the list of Questions i could then decied on what graph and what order the graph would be shown. When I had made my Wireframe I had not elimenated any questions so some of my
    origional questions where in there as this was still at the design stage of my project. For my wireframe I chose a site called MockFlow.com. They alloud me to create a free wire frame 
    for free on their platform (click <a href="https://wireframepro.mockflow.com/view/Me16e59cd288f0d779d96c6aa41a089101569756313907" target="_blank">Here</a> to view)
</p>
<p>
    Now for the final 10% of my project that takes up 90% of the time and knowledge. The actual coding. I used a number of Libraries to help with my project, Bootstrap for the style and Colours
    D3 and DC to create the graphs, kaggle for the data, queue.js crossfilter and jquery. I also wrote customised functions in my Graphs.js using dc.js to render 2 dropdown filters 2 grapghs 1 pie 
    chart and 1 bar chart and a running count of how many records are being dispalyed in the charts against the total.
</p>

<h1>UX</h1>
<br>
<p>I have designed my Site to tell a story, one of the most interesting in my opinion, in mordern astrophysics. A story about how a failure of one of the most important parts of a satalite gave us an unpreciedented
window into the study of exoplanets. I aim to provide educational statistics to amature astromonamers to have a resource to find out what planet was discovered by what method and when.</p>

<h1>Features</h1>
<br>
<p>In the main paragraph, I set the scene to tell the story of what it is that the data is trying to tell us. Then lay out the drop down menus to allow the user to filter the data to their own specifications (i.e by 
single planet to find out how it was discovered and when. Or by classification list I.E confirmed planets to see the names of those planets by opening the planets list. The exsisting data can be further filterd by
clicking on each of the graphs. IE if you want to see the names of confirmed planets where discovered in 2017 using the transit method, all you need to do is select the confirmed planets in the planetary list dropdown,
click on 2017 on the Year discovered bar graph and click on the transit method in the pie chart, open the drop down of planet names at the top and there they all are as well as the total number of them in the dc-data-count 
function above the piechart</p>

<p>I had a few ideas as how to take the site further there are a few other graphs I could render,  "Distance/Year discovered",  "distance/star temprature" as well as a 3d rendering of the plnets using d3/dc by making a 
  3D scatterplat keeping our sun as teh origin, using the Right acension as the x coordinate the declination as the y coordinates and the distance from the sun(in parsecs) as the z coordinates, which after pacrcing the 
  x&y coordinates as time (H/M/S) as that is what the numbers are measured in then we can see how diverse the data is, if it is all corralated in 1 direction. 
  </p>
<h1>Testing</h1>
<br>
<p>
In my testing phase I have come accross a few bugs and issues that I have had to over come. I have had numerious issues with the SVG elements not Not changing colour to conform with the theme, data not plotting, size issues and all sorts of smaller issues.
to over come each of these I tried a test driven develompent approach. The first major issue is that targeting the svg elements with css was a monumental failure. I could do it in the developer tools in chrome. But the not when that was moved into the CSS code 
it did not work initally as it changed the background to black and kept the text black aswell. It looked like a floating barchart with no references at all. 
I had innitally inverted the colours as my backgrtound was black with white text and the standard DC elements had white backgrund and black text it worked for the most part except for teh bars in my bar chart changed from blue to a browny orange colour. It worked for a while until i could build up 
more of my site arround I could not accept it as a parmanent soloution. To fix this I had to find out why the css targeting was not working, it was is because I was calling the styline elements too early in the renderiung procedss. I was telling the table to be black, the computer was renderinging the element, 
then asking what colour its should be from the dc.min.css. After some trial and error I got the correct order in which to call the correct elements to colour it correctly. To fix the data not potting as it should, my first thought was the element target in my graph.js file. I had that correct, I checked the 
dc.pluck what typed correctly, I had the dimension and group selected the correct way and in the right order. Eventually I found that my dc.renderAll was outside of my function. so that issue was quickly remided. lastly the Sixing issue was an issue from the start I can make the graph smaller and rerender it 
after a smaller screensize but the axis markings and labels became unreadable so after a certin screen size or it warped the entire view of the site. at taht point I decieded that I had to hide my barchart at the smallest screen size to keep the site readable.
</p>
<h1>Deployment</h1>
<br>
<p>
 
</p>
<h1>Credits</h1>
<br>
<p> I owe credit to the following organisations for supplying information to me:</p>
<ul>
<li>I got my data for the project from kaggle.com (https://www.kaggle.com/mrisdal/open-exoplanet-catalogue)</li>
<li>My theme is called "Lux" from Bootswatch (https://bootswatch.com/lux/)</li>
<li>My Javascript Libraries for manipulating the data are D3, DC, crossfilter and queue (https://d3js.org/ https://dc-js.github.io/dc.js/ https://square.github.io/crossfilter/ https://caolan.github.io/async/v2/queue.js.html)</li>
<li>for my opening paragraphs I got my information from wikipedia Kepler space telescope artical (https://en.wikipedia.org/wiki/Kepler_space_telescope)</li>
<li>All written information from the solarsystem planets is taken exclusivaly from Each of the planets own Wikipedia entery.</li>
</ul>
<h1>Media</h1>
<br>
<p>I got the media used in my site from teh following sources</p>
<ul>
<li>I got the pictures for the planets all from Devstronomy (https://devstronomy.com/#/)</li>
<li>My hero Image was borrowed from PSILoveYou blog "Starry Night Surprise" by Natasha Kurien(https://psiloveyou.xyz/starry-night-surprise-a99cf8d6ede3)</li>
</ul>
<h1>Acknowledgements</h1>
<br>
<p>I had a few inspirations for my project:</p>

<ul>
<li>Firstly I would like to acknowledge dbennett's kernal (3d Spatial locations on Kaggle) for showing me that my idea for the 3d scatterchart really can work, even  with a different library (https://www.kaggle.com/dbennett/3d-spatial-locations-with-kepler-investigation)</li>
<li>My mentor from the code Instititute, Rahul Lakhanpal, for nudgng me in the right direction when i needed it and pointing out different reasearch materials for me to study to further my project.</li>
</ul>