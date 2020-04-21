<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Portfolio
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="js-page">


		<header id="masthead" class="js-header">
			<div class="js-branding">

				<div id="logo" class="js-logo">
					<a href="/" rel="home">
						<img src="<?php header_image(); ?>" height="<?php echo get_custom_header()->height; ?>" width="<?php echo get_custom_header()->width; ?>" alt="" />
					</a>
				</div>
		
			
			</div><!-- .site-branding -->

		
				
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-header',
						'menu_id'        => 'primary-menu',
						'container_class' => 'js-header-menu',
					)
				);
				?>
			<!-- #site-navigation -->
               

		<ul class="js-social">
		</ul>

		</header><!-- #masthead -->

		<main class="js-content">