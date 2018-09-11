/**
 *Created by Aran on 2018/9/11.
 *
 *那当自己都萎靡到
 *无法被依靠的时候该如何振作？
 *
 *除过自己心中笃信的那一点不灭的光亮
 *我觉得这世间再没有别的东西比它值得被如此依靠。
 *
 */


export function getJsonUtils(httpUrl,currentClass) {
    // 'http://demo.routeman.bwuni.com:8090/insurance/POST/insurer/all'
    fetch(httpUrl)
        .then((response) => response.json())
        .then((responseJson) => {

            currentClass.setState({
                isLoading: false,
                dataSource: responseJson,
            })

        })
        .catch((error) =>{
            console.error(error);
        });
}