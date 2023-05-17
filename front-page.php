<?php 
    get_header();
?>

<!-- Header Banner -->
    <div class="page-banner">
      <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/library-hero.jpg");?>)"></div>
      <div class="page-banner__content container t-center c-white">
        <h1 class="headline headline--large">Hi, I am Andre Nonso</h1>
        <h2 class="headline headline--medium">Wordpress, HTML, CSS and JS Developer and Debugger</h2>
        <h3 class="headline headline--small">Why don&rsquo;t you check out the <strong>Projects</strong> I've worked on so far</h3>
        <a href="#" class="btn btn--large btn--blue">Find a Project</a>
      </div>
    </div>

<!-- Website posts content -->

    <!-- Split One -->
    <div class="full-width-split group">
      <div class="full-width-split__one">
        <div class="full-width-split__inner">
          <h2 class="headline headline--small-plus t-center">Upcoming Events</h2>

<?php 

    $homePageCustomQueryForEvents = new WP_Query(array(
      "post_type" => "event",
      "posts_per_page" => 2
    ));


    while($homePageCustomQueryForEvents->have_posts()){
      $homePageCustomQueryForEvents->the_post();
?>

          <div class="event-summary">
            <a class="event-summary__date t-center" href="#">
              <span class="event-summary__month"><?php the_time("M") ?></span>
              <span class="event-summary__day"><?php the_time("d") ?></span>
            </a>
            <div class="event-summary__content">
              <h5 class="event-summary__title headline headline--tiny"><a href="<?php the_permalink()?>"><?php the_title() ?></a></h5>
              <p><?php  echo wp_trim_words(get_the_excerpt(), 18); ?><a href="<?php the_permalink()?>" class="nu gray">Learn more</a></p>
            </div>
          </div>

<?php } ?>

          <!-- <div class="event-summary">
            <a class="event-summary__date t-center" href="#">
              <span class="event-summary__month">Apr</span>
              <span class="event-summary__day">02</span>
            </a>
            <div class="event-summary__content">
              <h5 class="event-summary__title headline headline--tiny"><a href="#">Quad Picnic Party</a></h5>
              <p>Live music, a taco truck and more can found in our third annual quad picnic day. <a href="#" class="nu gray">Learn more</a></p>
            </div>
          </div> -->

          <p class="t-center no-margin"><a href="#" class="btn btn--blue">View All Events</a></p>
        </div>
      </div>


      <!-- Split Two -->
      <div class="full-width-split__two">
        <div class="full-width-split__inner">
          <h2 class="headline headline--small-plus t-center">From Our Blogs</h2>
<?php
    // initializing custom query
    $homepageCustomQueryForPosts = new WP_Query(array(
        "posts_per_page" => 2
    ));

    while($homepageCustomQueryForPosts->have_posts(  )) {
        $homepageCustomQueryForPosts->the_post();    //prepares all the data
?>
          <div class="event-summary">
            <a class="event-summary__date event-summary__date--beige t-center" href="#">
              <span class="event-summary__month"><?php the_time("M"); ?></span>
              <span class="event-summary__day"><?php the_time("d"); ?></span>
            </a>
            <div class="event-summary__content">
              <h5 class="event-summary__title headline headline--tiny"><a href="<?php echo get_the_permalink(); ?>"><?php the_title(); ?></a></h5>
              <p><?php  echo wp_trim_words(get_the_excerpt(), 18); ?>. <a href="<?php echo get_the_permalink(); ?>" class="nu gray">Read more</a></p>
            </div>
          </div>
<?php 
    }; wp_reset_query();
?>

          <!-- <div class="event-summary">
            <a class="event-summary__date event-summary__date--beige t-center" href="#">
              <span class="event-summary__month">Feb</span>
              <span class="event-summary__day">04</span>
            </a>
            <div class="event-summary__content">
              <h5 class="event-summary__title headline headline--tiny"><a href="#">Professors in the National Spotlight</a></h5>
              <p>Two of our professors have been in national news lately. <a href="#" class="nu gray">Read more</a></p>
            </div>
          </div> -->

          <p class="t-center no-margin"><a href="<?php echo site_url("/blog")?>" class="btn btn--yellow">View All Blog Posts</a></p>
        </div>
      </div>
    </div>

<!-- Footer Slider -->
    <div class="hero-slider">
      <div data-glide-el="track" class="glide__track">
        <div class="glide__slides">
          <div class="hero-slider__slide" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/bus.jpg") ?>)">
            <div class="hero-slider__interior container">
              <div class="hero-slider__overlay">
                <h2 class="headline headline--medium t-center">Free Transportation</h2>
                <p class="t-center">All students have free unlimited bus fare.</p>
                <p class="t-center no-margin"><a href="#" class="btn btn--blue">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="hero-slider__slide" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/apples.jpg")?>)">
            <div class="hero-slider__interior container">
              <div class="hero-slider__overlay">
                <h2 class="headline headline--medium t-center">An Apple a Day</h2>
                <p class="t-center">Our dentistry program recommends eating apples.</p>
                <p class="t-center no-margin"><a href="#" class="btn btn--blue">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="hero-slider__slide" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/bread.jpg")?>)">
            <div class="hero-slider__interior container">
              <div class="hero-slider__overlay">
                <h2 class="headline headline--medium t-center">Free Food</h2>
                <p class="t-center">Fictional University offers lunch plans for those in need.</p>
                <p class="t-center no-margin"><a href="#" class="btn btn--blue">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="slider__bullets glide__bullets" data-glide-el="controls[nav]"></div>
      </div>
    </div>

















<?php 
    get_footer();
?>