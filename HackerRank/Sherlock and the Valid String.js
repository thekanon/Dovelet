/*
Sherlock considers a string to be valid if all characters of the string appear the same number of times. 
셜록은 생각한다. 문자열이 유효하다고 만약 문자열의 모든 문자들이 나타난다면 같은 횟수로
셜록은 문자열의 모든 문자들이 같은 횟수로 나타난다면 문자열이 유효한다고 생각한다.


It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. 
또한 유효하다. 만약 그가 할수 있다 삭제를 그냥 문자 1개 1인덱스에서 문자열의 그리고 남아있는 문자들을 할것이다 같은 횟수로 발생하게
또한 그가 문자 1개를 1개의 인덱스에서 삭제할 수 있고, 남아있는 문자들이 같은 횟수로 발생한다면 유효하다.

Given a string s, determine if it is valid. If so, return YES, otherwise return NO.
문자열 s가 주어진다. 유효한지 결정한다. 그렇다면 YES를,  그렇지 않다면 NO를

For example, if s = abc, it is a valid string because frequencies are {a:1,b:1,c:1}. 
예를들어 s=abc이고, 이것은 유효한 문자열이다. 왜냐하면 빈도수가 {a:1,b:1,c:1} 이기 때문에.

So is s = abcc because we can remove one c and have 1 of each character in the remaining string. 
그리고 s=abcc도 그렇다. 왜냐하면 우리는 1개를 제거할 있고 각각 1개씩 남아있기(문자열이) 때문이다.

If s = abccc however, the string is not valid as we can only remove 1 occurrence of c.
만약 s=abccc 인 경우 하지만, 문자열이 유효하지 않다 우리는 할 수 있다 오직 1개를 제거, c의 발생을
그러나 s=abccc인 경우, 우리는 오직 c의 발생을 1개만 제거할 수 있기 때문에 문자열이 유효하지 않다.

That would leave character frequencies of {a:1, b:1, c:2}.
그것은 남아있을 것이다. 문자열이 {a:1, b:1, c:2}의 빈도수를 가진
그렇게 하면 빈도수 {a:1, b:1, c:2}를 가진 문자열이 남을 것이다.


해결방법
생각해보니 이것도 결국은 알파벳 안에서만 돈다.

해쉬로배열 a-z을 만든다.
배열을 정렬한다.
각 알파벳의 빈도수가 배열로 생긴다.

거기에 해쉬의 해쉬를 만들어보자.
그럼 빈도수의 해쉬가 생길 것이다.
나머지는 코드에 기술함.
*/
var s = "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd";
// var s = "aabbc"
function isValid (s) {
    var aArr = [];
    var bArr = {};
    for(var i=97;i<97+26;i++){ 
        aArr[i] = 0 
    }

    for(var i=0;i<s.length;i++){
        aArr[s[i].charCodeAt()]++; 
    }
   
    for(var i=97;i<97+26;i++){
        if(aArr[i] == 0){
            continue
        }
        if(bArr[aArr[i]] == undefined) {
            bArr[aArr[i]]=1;
        }else {
            bArr[aArr[i]]++;
        }
    }    
    var validArr = Object.keys(bArr)
    //1. 빈도수가 3개이상일때는 무조건 아님.
    if(validArr.length>2)
        return "NO"
    //2. 빈도수가 1개이하일때는 무조건 맞음.
    if(validArr.length<2)
        return "YES"
    //3. 빈도수가 1인경우가 1개만 있다면 그걸 제거했을때 빈도수가 사라지므로 무조건 YES다.
    if(bArr[1]==1)
        return "YES"
    
    // 빈도수의 차이가 1일때 큰 값에서 하나를 빼면 빈도수가 동일해지는지 체크
    if(validArr[0] > validArr[1]){
        if(Math.abs(validArr[0] - validArr[1] == 1)){
            if(bArr[validArr[0]]==1 || bArr[validArr[1]]==1)
                return "YES"
        }
    }else {
        if(Math.abs(validArr[1] - validArr[0] == 1)){
            if(bArr[validArr[1]]==1 || bArr[validArr[0]]==1 )
                return "YES"
        }
    }
    
    return "NO"
}
isValid(s);