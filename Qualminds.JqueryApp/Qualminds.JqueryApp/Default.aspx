<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Qualminds.JqueryApp._Default" %>

<asp:Content runat="server" ID="FeaturedContent" ContentPlaceHolderID="FeaturedContent">
    <link href="Style/master.css" rel="stylesheet" />
     <script src="Scripts/jquery.js"></script>
        <script src="//code.jquery.com/jquery-1.10.2.js"></script>
      

    
 <div id="q">
<p>Click or double click here.</p>
     </div>
<span>Hi hello</span>
    <div id="foo">
        click me
    </div>
    <div id="bar">
       
    </div>
    <div class="r">
        click me once more
    </div>
    <div class="p">
        HI HEllO BYE
    </div>
    <div class="hi">
        trigger
    </div>
    <div class="hello">

    </div>
    <div class="bye">

    </div>
   <asp:Label Text="First Name" runat="server"></asp:Label> <asp:TextBox ID="firstname" ClientIDMode="Static" runat="server"></asp:TextBox><br />
    <asp:Label Text="Last Name" runat="server"></asp:Label><asp:TextBox ID="lastname" ClientIDMode="Static" runat="server"></asp:TextBox><br />
    <asp:Button ID="btn" ClientIDMode="Static" Text="Button" runat="server" />
    <%--<asp:Button ID="oldbutton" ClientIDMode="Static" Text="OldButton" OnClientclick="javascript:return this.trigger("focus")" runat="server" />--%>
    <asp:Button ID="newbutton" ClientIDMode="Static" Text="newButton" runat="server" />
    <div id="infodisaplay">

    </div>
</asp:Content>

