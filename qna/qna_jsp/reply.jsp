<%@ page contentType="text/html; charset=EUC-KR" %>
<jsp:useBean id="bean" class="ch15.BoardBean" scope="session"/>
<%
	  String nowPage = request.getParameter("nowPage");
	  String title = bean.getTitle();
	  String content = bean.getContent(); 
%>
<html>
    <head>
    <title>JSP Board</title>
    <link href="reply.css" rel="stylesheet" type="text/css">
    <!-- <script>
        function check() {
           if (document.updateFrm.pass.value == "") {
             alert("수정을 위해 패스워드를 입력하세요.");
             document.updateFrm.pass.focus();
             return false;
             }
           document.updateFrm.submit();
        }
    </script> -->
    </head>
    <body >
        <header class="" id="header">
    
            <!-- 헤더 내부 박스1 - 좌측(버거메뉴+사이트로고+가운데 빈부분까지) -->
            <div class="hd_b1">
                
                <!-- 버거메뉴 -->
                <div class="hd_c1">
                    <svg focusable="false" viewBox="0 0 24 24">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                </div>
        
                <!-- 사이트로고 -->
                <div class="hd_c2">
                    <a class="" href="https://g2project.github.io/main/">
                        <p>Top Sights</p>
                    </a>
                </div>
            </div>
        
            <div class="hd_b2">
                <!-- 헤더 오른쪽 그리드메뉴 -->
                <div class="hd_c3">
                    <a class="" href="#">
                        <svg class="gb_8e" focusable="false" viewBox="0 0 24 24">
                            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                        </svg>
                    </a>
                </div>
        
                <!-- 헤더 오른쪽 사용자 이름로고 -->
                <div class="hd_c4">
                    <a class="" href="#">
                        <img class="" src="https://lh3.googleusercontent.com/ogw/ADGmqu-VCEuI2yv0sSZS3OOMMnzH2FZd8hxmH7_aisAu=s32-c-mo" srcset="https://lh3.googleusercontent.com/ogw/ADGmqu-VCEuI2yv0sSZS3OOMMnzH2FZd8hxmH7_aisAu=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/ADGmqu-VCEuI2yv0sSZS3OOMMnzH2FZd8hxmH7_aisAu=s64-c-mo 2x " alt="" aria-hidden="true" data-noaft="">
                    </a>
                </div>
            </div>
            
        </header>
        <div id="center">
            <div class="qna_bn">
                <img class="qna_bnimg" alt="" src="img/qna.jpg">
                <!-- 큰제목 배너틀 안쪽 제주도 틀 -->
                <div class="qna_bntxt">
                    <h1 class="">답변하기</h1>
                </div>
             </div>
            
             <form method="post" action="boardReply" >
            <table class="wt_wp">
                <tr>
                    <td >
                    <table class="wt_tb">
                    
                    <!-- sql = "insert tblHelp(name,category,title,content,ref,pos,depth,regdate,"
                                + "pass,count,ip,filename,filesize,rstatus)";
                        sql += "values(?, ?, ?, ?, 0, 0, now(), ?, 0, ?, ?, ?)"; -->
                    
                    
                        <tr>
                            <td >아이디</td>
                            <td >
                            <input name="name" size="10" maxlength="8" ></td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type="password" name="pass" size="15" maxlength="15"></td>
                        </tr>
                        <tr>
                            <td>분류</td>
                            <td><input name="category" size="15" maxlength="15" value="답변"></td>
                        </tr>
                        <tr>
                            <td>제목</td>
                            <td>
                            <input name="title" size="50" maxlength="30" value="답변 : <%=title%>"></td>
                        </tr>
                        <tr >
                            <td>내용</td>
                            <td class="wt_tx">
                                <textarea name="content"><%=content%><br>------------------답변 글을 쓰세요.------------------
                                </textarea></td>
                        </tr>
                        <!-- <tr>
                            <td>파일찾기</td> 
                            <td><input type="file" name="filename" size="50" maxlength="50"></td>
                        </tr> -->
                        <!-- <tr>
                            <td >내용타입</td>
                            <td class="radioBox">HTML<input type="radio" name="contentType1" value="HTTP" >&nbsp;&nbsp;&nbsp;
                            TEXT<input type="radio" name="contentType1" value="TEXT" checked>
                            </td>
                        </tr> -->
                        <tr>
                            <!-- <td colspan="2"><hr/></td> -->
                        </tr>
                        <tr>
                            <td colspan="2" class="wt_bb">
                                <input type="submit" value="답변등록" >
                                <input type="reset" value="다시쓰기">
                                <input type="button" value="뒤로" onClick="history.back()">
                            </td>
                        </tr>
                    </table>
                    </td>
                </tr>
            </table>
            <input type="hidden" name="ip" value="<%=request.getRemoteAddr()%>" >
            <input type="hidden" name="nowPage" value="<%=nowPage%>">
            <input type="hidden" name="ref" value="<%=bean.getRef()%>">
            <input type="hidden" name="pos" value="<%=bean.getPos()%>">
            <input type="hidden" name="depth" value="<%=bean.getDepth()%>">
            </form>
        </div>
    </body>
    </html>