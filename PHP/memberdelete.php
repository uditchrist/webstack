<?php
	include('aheader.html');
	include('dbconnection.php');
		
		$mid=$_GET['a'];
		$s="delete from memberreg where Membership_ID=$mid";
		$r=mysqli_query($con, $s);
		if($r)
			header('location:viewmember.php');
		else
			echo "not";
		
	include('footer.html');
	?>
	