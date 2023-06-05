<?php 
    get_header();

    pageBannerTemplate();
?>

    <!-- <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri("/assets/images/ocean.jpg") ?>)"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title"><?php the_title(); ?></h1>
            <div class="page-banner__intro">
            <p>Don't forget to replace this later.</p>
            </div>
        </div>
    </div> -->

<!-- START SINGLE PAGE SECTION -->
    <div class="container container--narrow page-section">
<?php if(wp_get_post_parent_ID(get_the_ID()) > 0){ ?>
    <!-- START META BOX INNER PAGE -->
      <div class="metabox metabox--position-up metabox--with-home-link">
        <p>
          <a class="metabox__blog-home-link" href="<?php echo get_the_permalink(wp_get_post_parent_ID(get_the_ID())); ?>"><i class="fa fa-home" aria-hidden="true"></i> <?php echo get_the_title(wp_get_post_parent_ID(get_the_ID())) ?></a> <span class="metabox__main"><?php the_title(); ?></span>
        </p>
      </div>
    <!-- END META BOX INNER PAGE  -->
<?php    }; ?>

<!-- php code to show this section for only pages that have children -->
      
<?php 
   // test to see if page have a child
   $pageHasChild = get_pages(array(
        "child_of" => get_the_ID()
   ));  //this function will tesst to see if a page has children. If true, it return 1 or +1, if false, it return 0. Value is then passed on to the variable.

   if (wp_get_post_parent_ID(get_the_ID()) or $pageHasChild){
?>
    <!-- START INNER PAGE LINKS -->
      <div class="page-links">
        <h2 class="page-links__title"><a href="<?php echo get_the_permalink(wp_get_post_parent_id()); ?>"><?php echo get_the_title(wp_get_post_parent_id()); ?></a></h2>
        <ul class="min-list">
<?php 
    if(wp_get_post_parent_ID(get_the_ID())){
        $child_of = wp_get_post_parent_ID(get_the_ID());
    }else{
        $child_of = get_the_ID();
    };

    wp_list_pages(array(
        "title_li" => NULL,
        "child_of" => $child_of,
        "sort_column" => "menu_order"
    ));
?>
          <!-- <li class="current_page_item"><a href="#">Our History</a></li>
          <li><a href="#">Our Goals</a></li> -->
        </ul>
      </div>
      <!-- END INNER PAGE LINKS -->
<?php } ?>
        <!-- START CONTENT -->
      <div class="generic-content">
        <?php the_content(); ?>
      </div>    
      <!-- END CONTENT -->
    </div>  
<!-- END SINGLE PAGE CONTENT -->



<?php get_footer(); ?>