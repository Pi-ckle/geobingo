<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en-US" }}">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>geobingo</title>
 
    <style>
a {text-align:center; text-decoration:none;}
button {width:50%; height:200px; margin-top:30%; font-size:20px;} 
    </style>

{% seo %}
    <link rel="stylesheet" href="{{ "/assets/css/style.css?v=" | append: site.github.build_revision | relative_url }}">
    {% include head-custom.html %}
  </head>
  <body>
    <div class="container-lg px-3 my-5 markdown-body">
      {% if site.title and site.title != page.title %}
      <h1><a href="{{ "/" | absolute_url }}">{{ site.title }}</a></h1>
      {% endif %}

      <a href="https://geobingo.org/bingo.html"><center><button class="boutons"><strong>PLAY GEO BINGO</strong></button></center></a>

      {% if site.github.private != true and site.github.license %}
      <div class="footer border-top border-gray-light mt-5 pt-3 text-right text-gray">
        This site is open source. {% github_edit_link "Improve this page" %}.
      </div>
      {% endif %}
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.0/anchor.min.js" integrity="sha256-lZaRhKri35AyJSypXXs4o6OPFTbTmUoltBbDCbdzegg=" crossorigin="anonymous"></script>
    <script>anchors.add();</script>
  </body>
</html>
