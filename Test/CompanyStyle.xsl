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
                    <h2>Employee Management System</h2>
                    <table border="2" align="center">
                        <tr bgcolor="orange">
                            <th style="text-align:left">ID</th>
                            <th style="text-align:left">NAME</th>
                            <th style="text-align:left">AGE</th>
                            <th style="text-align:left">SALARY</th>
                            <th style="text-align:left">EMAIL</th>
                            <th style="text-align:left">MobNum</th>
                            <th style="text-align:left">Designation</th>
                            <th style="text-align:left">Promotion</th>
                        </tr>
                        <xsl:for-each select="Company/Employee">
                            <tr>
                                <td>
                                    <xsl:value-of select="@id"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Emp-name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Emp-age"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Emp-salary"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Emp-emailid"/>
                                </td>
                                 <td>
                                    <xsl:value-of select="Emp-phonenum"/>
                                </td>
                                 <td>
                                    <xsl:value-of select="Emp-designation"/>
                                </td>
                                 <xsl:if test="Emp-age &gt;= 40 and Emp-age &lt;= 49">
                                    <td>Team Leader</td>
                                </xsl:if>
                                
                                <xsl:if test="Emp-age &gt;= 50">
                                    <td>Associate Project Manager</td>
                                </xsl:if>
                                
                                <xsl:if  test="Emp-age &lt; 40">
                                    <td>Developer</td>
                                </xsl:if>
                                   
                            </tr>
                             
                        </xsl:for-each>
                    </table>
                </div>  

        </body>
            </html>
         </xsl:template>
</xsl:stylesheet>