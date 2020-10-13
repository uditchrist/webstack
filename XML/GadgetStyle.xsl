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
				   		<h1 style="text-align:center;">Digital Gadgets</h1>
                <div class='Gadgets' style="float:center;">
                    <h2>List of Gadgets</h2>
                    <table border="2" align="center">
                        <tr bgcolor="skyblue">
                            <th style="text-align:left">Name</th>
                            <th style="text-align:left">Brand</th>
                            <th style="text-align:left">Type</th>
                            <th style="text-align:left">Model</th>
                            <th style="text-align:left">Price</th>
                            <th style="text-align:left">Warranty</th>
                        </tr>
                        <xsl:for-each select="Gadgets/Product">
                            <tr>
                                <td>
                                    <xsl:value-of select="Name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Brand"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Type"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Model"/>
                                </td>
                                 <td>
                                    <xsl:value-of select="Price"/>
                                </td>
                                 <td>
                                    <xsl:value-of select="Warranty"/>
                                </td>

                            </tr>
                        </xsl:for-each>
                    </table>
                </div>	

    			</body>
    		</html>
    	 </xsl:template>
</xsl:stylesheet>
