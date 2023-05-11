<?php 
    get_header();
?>

    <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/ocean.jpg") ?>)"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title"><?php the_title(); ?></h1>
            <div class="page-banner__intro">
            <p>Don't forget to replace this later.</p>
            </div>
        </div>
    </div>

    <div class="container container--narrow page-section">
<?php if(wp_get_post_parent_ID(get_the_ID()) > 0){ ?>
      <div class="metabox metabox--position-up metabox--with-home-link">
        <p>
          <a class="metabox__blog-home-link" href="<?php echo get_the_permalink(wp_get_post_parent_ID(get_the_ID())); ?>"><i class="fa fa-home" aria-hidden="true"></i> <?php echo get_the_title(wp_get_post_parent_ID(get_the_ID())) ?></a> <span class="metabox__main"><?php the_title(); ?></span>
        </p>
      </div>
<?php    }; ?>
      <!-- <div class="page-links">
        <h2 class="page-links__title"><a href="#">About Us</a></h2>
        <ul class="min-list">
          <li class="current_page_item"><a href="#">Our History</a></li>
          <li><a href="#">Our Goals</a></li>
        </ul>
      </div> -->
      <div class="generic-content">
        <?php the_content(); ?>
      </div>
    </div>




<?php get_footer(); ?>