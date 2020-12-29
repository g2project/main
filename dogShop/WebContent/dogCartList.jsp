<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@page import="vo.Cart"%>
<%@page import="vo.Dog"%>
<%@page import="dao.DogDAO"%>
<%@page import="java.util.List"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.ArrayList"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<style type="text/css">
#listForm {
   width: 640px;
   border: 1px red solid;
   margin: auto;
   
}

h2 {
   text-align: center;
}

table {
   width: 550px;
   margin: auto;
}

.tr_top {
   background-color: lime;
}

.div_empty {
   text-align: center;
   background-color:
}

.td_command {
   text-align: right;
}
#todayImageList{
   text-align: center;
}
#productImage{
   width:150px;
   height:150px;
   border:none;
}
#cartImage{
   width:70px;
   height:70px;
   border:none;
}
#select{
   text-align: right;
}
#commandList{
   text-align: center;
}
#upImage{
   width: 15px;
}
#downImage{
   width: 15px;
}
</style>
</head>
<body>

<section id="listForm">

<c:if test="${cartList != null && cartList.size() > 0 }">

	<h2>��ٱ��� ���</h2>
	<form method="post">
		<table>
			<tr id="select">
				<td colspan ="6">
					<select id = "startMoney" name="startMoney">
		    			<option>=����=</option>
		    			<c:choose>
		    				<c:when test="${startMoney==1000 }">
		    					<option selected="selected">1000</option>
		    					<option>2000</option>
		    					<option>3000</option>
			    				<option>4000</option>
		    				</c:when>
		    				<c:when test="${startMoney==2000 }">
		    					<option>1000</option>
		    					<option selected="selected">2000</option>
		    					<option>3000</option>
			    				<option>4000</option>
		    				</c:when>
		    				<c:when test="${startMoney==3000 }">
		    					<option>1000</option>
		    					<option>2000</option>
		    					<option selected="selected">3000</option>
			    				<option>4000</option>
		    				</c:when>
		    				<c:when test="${startMoney==4000 }">
		    					<option>1000</option>
		    					<option>2000</option>
		    					<option>3000</option>
			    				<option selected="selected">4000</option>
		    				</c:when>
		    				<c:otherwise>
		    					<option>1000</option>
		    					<option>2000</option>
		    					<option>3000</option>
		    					<option>4000</option>
		    				</c:otherwise>
		    			</c:choose>
		    		</select>
		    		<select id = "endMoney" name="endMoney">
		    			<option>=�ְ�=</option>
		    			<c:choose>
		    				<c:when test="${endMoney==1000 }">
		    					<option selected="selected">1000</option>
		    					<option>2000</option>
		    					<option>3000</option>
			    				<option>4000</option>
		    				</c:when>
		    				<c:when test="${endMoney==2000 }">
		    					<option>1000</option>
		    					<option selected="selected">2000</option>
		    					<option>3000</option>
			    				<option>4000</option>
		    				</c:when>
		    				<c:when test="${endMoney==3000 }">
		    					<option>1000</option>
		    					<option>2000</option>
		    					<option selected="selected">3000</option>
			    				<option>4000</option>
		    				</c:when>
		    				<c:when test="${endMoney==4000 }">
		    					<option>1000</option>
		    					<option>2000</option>
		    					<option>3000</option>
			    				<option selected="selected">4000</option>
		    				</c:when>
		    				<c:otherwise>
		    					<option>1000</option>
		    					<option>2000</option>
		    					<option>3000</option>
		    					<option>4000</option>
		    				</c:otherwise>
		    			</c:choose>
		    		</select>
		    		<input type="submit" value="�˻�" formaction="dogCartSearch.dog"/>
				</td>
			</tr>
			<tr class = "tr_top">
				 <td><input type="checkbox" id = "allCheck" name="allCheck" onclick="checkAll(this.form)"/> </td>
	             <td>��ȣ</td>
	             <td>��ǰ �̹���</td>
	             <td>��ǰ��</td>
	             <td>����</td>
	             <td>����</td>
			</tr>
			
			<c:forEach var="cart" items="${cartList}" varStatus="status">
			
			<tr>
				<td>
					<input type="checkbox" id="remove" value="${cart.kind}">
				</td>
				<td>
					${status.index + 1 }
				</td>
				<td>
					<img src = "images/${cart.image }" id="cartImage">
				</td>
				<td>${cart.kind }</td>
				<td>${cart.price }</td>
				<td>
					 <a href="dogCartQtyUp.dog?kind=${cart.encodingKind }">
		             <img src="images/up.jpg" id = "upImage" border=0/>
		             </a><br>
		             ${cart.qty }<br>
		             <a href="javascript:checkQty('${cart.kind}',${cart.qty})">
		             <img src="images/down.jpg" id = "downImage" border=0/>
		             </a>
				</td>
			</tr>
			
			</c:forEach>
			<tr>
				 <td colspan="5" sytle="text-align:center">
				 	�� �ݾ� : ${totalMoney }��
				 </td>
			</tr>
			<tr>
				<input type="submit" value="����" formaction="dogCartRemove.dog">
			</tr>
		</table>
	</form>

</c:if>

<c:if test="${cartList == null }">
      <section class="div_empty">
      �������� �����ϴ�.
      </section>
	</c:if>
   <nav id="commandList">
   		<a href="dogList.dog">���� ����ϱ�</a>
   </nav>

</section>

</body>
</html>