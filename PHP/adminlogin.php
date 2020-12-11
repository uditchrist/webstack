<?php
	session_start();
	
?>

<!DOCTYPE html>
<html lang="en">



<head>
    <title>Home | Rotary Vasudha</title>

   <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">    
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/font-awesome.min.css">
    <link rel="stylesheet" href="../css/elegant-fonts.css">
    <link rel="stylesheet" href="../css/themify-icons.css">
    <link rel="stylesheet" href="../css/swiper.min.css">
   <link rel="stylesheet" href="../style.css">
</head>

<body>


    <header class="site-header">
        <div class="top-header-bar">
            <div class="container">
                <div class="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
                    <div class="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                       
						<div class="header-bar-email">
						  E-Mail: <a href="#">udit.ukg@gmail.com</a>
                        </div><!-- .header-bar-email -->
						
                        <div class="header-bar-text">
                            <p>PHONE: <span>+91 78914 92201</span></p>
                        </div><!-- .header-bar-text -->
                    </div><!-- .col -->

                    <div class="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                        <div class="donate-btn">
                            <a href="./php/adminlogin.php">Sign in</a>
                        </div><!-- .donate-btn -->
                    </div><!-- .col -->
                </div><!-- .row -->
            </div><!-- .container -->
        </div><!-- .top-header-bar -->

        <div class="nav-bar">
            <div class="container">
                <div class="row">
                    <div class="col-14 d-flex flex-wrap justify-content-between align-items-center">
                        <div class="site-branding d-flex align-items-center">
                           <a class="d-block" href="index.html" rel="home"><img class="d-block" width=500 src="../images/logo.png" alt="logo"></a>
                        </div><!-- .site-branding -->

                        <nav class="site-navigation d-flex justify-content-end align-items-center">
                            <ul class="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                                <li class="current-menu-item"><a href="index.html">Home</a></li>
                                <li><a href="aboutus.html">About us</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="XML/NGO.xml">Members (XML)</a></li>
                                <li><a href="Registration/form.html">Members Registration</a></li>
                                <li><a href="json.html">Members Update (JSON)</a></li>    
                                <li ><a href="filter.html">Angular JS (Filter)</a></li>                              

                                <li><a href="#">Awards</a></li>
                                <li><a href="#">Scrapbooks</a></li>
							    <li><a href="#">Contact Us</a></li>
                            </ul>
                        </nav><!-- .site-navigation -->

                        <div class="hamburger-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div><!-- .hamburger-menu -->
                    </div><!-- .col -->
                </div><!-- .row -->
            </div><!-- .container -->
        </div><!-- .nav-bar -->
        <script>
            window.oncontextmenu = function () {
                        return false;
                    }
                    $(document).keydown(function (event) {
                        if (event.keyCode == 123) {
                            return false;
                        }
                        else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
                            return false;
                        }
                    });
                </script>
    </header><!-- .site-header -->
<body>
		<h1 align="center">Welcome to Login Panel</h1>
		
		<form action="adminlogin1.php" method="post">
		<table align="center">
		<tr>
			<td colspan="2" align="center">
				<?php	
					if(isset($_SESSION['err']))
						echo $_SESSION['err'];
				?>
			</td>
		</tr>
		<tr>
		
			<td >Username</td>
			<td><input type="text" name="user">
			<?php	
					if(isset($_SESSION['user']))
						echo $_SESSION['user'];
			?>
			</td>
		</tr>
		
		<tr>
			<td> Password</td>
			<td><input type="password" name="pass">
			<?php
				if(isset($_SESSION['pass']))
						echo $_SESSION['pass'];
			?></td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<input type="submit" name="sb" value="Login">
				<input type="reset" name="sb" value="Reset"></td>
		</tr>
		<tr>
			<td align="center" colspan="2"> <a href="signup.php"> Click here to Sign up!</a></td>
		</tr>
		</table>
        </form>
        
        
</body>

<?php
	$_SESSION['user']="";
	$_SESSION['pass']="";
	$_SESSION['err']="";
?>
</html>