<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    	<html>
    		<head>
    			<style>
    		div
            {
                text-align:center;
                width:100%;
                border:2px solid black;
            }
            td,th
            {
                font-size:larger;
                padding:20px;
                text-align:center !important;
            }

    			</style>
    		</head>
    		<body>
		<h1 style="text-align:center;">Employee Management System</h1>
                <div class='Company' style="float:center;">
                    <h2>Employee Details</h2>
                    <table border="2" align="center">
                        <tr bgcolor="skyblue">
                            <th style="text-align:left">ID</th>
                            <th style="text-align:left">Name</th>
                            <th style="text-align:left">Age</th>
                            <th style="text-align:left">Salary</th>
                            <th style="text-align:left">Email_ID</th>
                            <th style="text-align:left">Mobile</th>
                            <th style="text-align:left">Designation</th>
                        </tr>
                        <xsl:for-each select="Company/Employee">
                            <tr>
                                <td>
                                    <xsl:value-of select="ID"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Age"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Salary"/>
                                </td>
                                 <td>
                                    <xsl:value-of select="Email_ID"/>
                                </td>
                                 <td>
                                    <xsl:value-of select="Mobile"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Designation"/>
                                </td>

                            </tr>
                        </xsl:for-each>
                    </table>
                </div>	

    			</body>
    		</html>
    	 </xsl:template>
</xsl:stylesheet>