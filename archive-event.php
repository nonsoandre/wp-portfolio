<?php get_header(); ?>

<!-- PAGE BANNER START -->
    <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/ocean.jpg") ?>)"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title">All Events</h1>
            <div class="page-banner__intro">
                <p>Stay Updated with the latest Events 
                    <?php                     
                        if(is_category()) {
                            echo "for "; single_cat_title();
                        }elseif (is_author()) {
                            echo " by "; the_author();
                        }else{
                            the_archive_description();
                        }
                    ?>
                </p> 
            </div>
        </div>
    </div>

    <div class="container container--narrow page-section">
<?php 
    // looping in wordpress
    while(have_posts()) {
        the_post();

?>
    <!-- <div class="event-summary">
        <a class="event-summary__date t-center" href="#">
            <span class="event-summary__month"><?php the_time("M") ?></span>
            <span class="event-summary__day"><?php the_time("d") ?></span>
        </a>
        <div class="event-summary__content">
            <h5 class="event-summary__title headline headline--tiny"><a href="<?php the_permalink()?>"><?php the_title() ?></a></h5>
            <p><?php  echo wp_trim_words(get_the_excerpt(), 18); ?><a href="<?php the_permalink()?>" class="nu gray">Learn more</a></p>
        </div>
    </div> -->
    <div class="event-summary">
            <a class="event-summary__date t-center" href="#">
              <span class="event-summary__month">
                <?php 
                    $eventTime = new DateTime(get_field('event_date'));
                    echo $eventTime->format('M');
                ?>
              </span>
              <span class="event-summary__day">                <?php 
                    $eventTime = new DateTime(get_field('event_date'));
                    echo $eventTime->format('d');
                ?>
              </span>
            </a>
            <div class="event-summary__content">
              <h5 class="event-summary__title headline headline--tiny"><a href="<?php the_permalink()?>"><?php the_title() ?></a></h5>
              <p><?php if(has_excerpt()) {
                  echo get_the_excerpt();
              }else{
                echo wp_trim_words(get_the_content(), 18);
              }
              ?><a href="<?php the_permalink()?>" class="nu gray">Learn more</a></p>
            </div>
          </div>
<?php } ?>

<?php 
    // wp-pagination
    echo paginate_links();

?>
        <hr class="section-break">
        <p>Looking for a past event recap? Checkout our past event archive <a href="<?php echo site_url("/past-events"); ?>">Past Events</a></p>
    </div>


<?php get_footer() ?>