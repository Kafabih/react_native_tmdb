import React,{useEffect,useState} from 'react'
import {SafeAreaView,View,Text,StatusBar,FlatList,ImageBackground,ScrollView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Var from './Var'

function Homes(){
    const [genres,setGenres]=useState([]);
    const [nowPlaying,setNowPlaying]=useState([]);
    const [popular,setPopular]=useState([]);
    const [topRated,setTopRated]=useState([]);
    const [upComing,setUpcoming]=useState([]);

    useEffect(()=>{
        async function getGenres() {
            try {
              let response = await fetch(
                Var.host+"genre/movie/list?api_key="+Var.api_key_tmdb
              );
              let json = await response.json();
              setGenres(json.genres);
            } catch (error) {
              console.error(error);
            }
          }
          getGenres();

          async function getNowPlaying() {
            try {
              let response = await fetch(
                Var.host+"movie/now_playing?api_key="+Var.api_key_tmdb
              );
              let json = await response.json();
              setNowPlaying(json.results);
            } catch (error) {
              console.error(error);
            }
          }
          getNowPlaying();

          async function getPopular() {
            try {
              let response = await fetch(
                Var.host+"movie/popular?api_key="+Var.api_key_tmdb
              );
              let json = await response.json();
              setPopular(json.results);
            } catch (error) {
              console.error(error);
            }
          }
          getPopular();

          async function getTopRated() {
            try {
              let response = await fetch(
                Var.host+"movie/top_rated?api_key="+Var.api_key_tmdb
              );
              let json = await response.json();
              setTopRated(json.results);
            } catch (error) {
              console.error(error);
            }
          }
          getTopRated();

          async function getUpcoming() {
            try {
              let response = await fetch(
                Var.host+"movie/upcoming?api_key="+Var.api_key_tmdb
              );
              let json = await response.json();
              setUpcoming(json.results);
            } catch (error) {
              console.error(error);
            }
          }
          getUpcoming();
          //console.log(genres);
    },[])
    return(
        <SafeAreaView style={{backgroundColor:'#0F102B', flex:1}}>
            <StatusBar backgroundColor={'#0F102B'}/>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:0.5,margin:10}}>
                    <Text style={{color:'white', fontSize:25}}>LIKE MOVIES</Text>
                </View>
                <View style={{flex:0.5,alignItems:'flex-end',justifyContent:'center', margin:10}}>
                    <Ionicons name="md-search" color={"white"} size={30}/>
                </View>
            </View>
            <FlatList
                style={{maxHeight:50}}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={genres}
                keyExtractor={item=>item.id}
                renderItem={({item, index})=><RenderItem item={item}/>}
                />
            <ScrollView>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <Text style={{color:'white',fontSize:20,margin:10}}>NOW PLAYING</Text>
                    </View>
                    <View style={{flex:0.5,alignItems:'flex-end',justifyContent:'center'}}>
                        <AntDesign name="right" size={25} color="#F09631"/>
                    </View>
                </View>
                
                <FlatList
                    contentContainerStyle={{paddingHorizontal:10}}
                    style={{maxHeight:250}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={nowPlaying}
                    keyExtractor={item=>item.id}
                    renderItem={({item, index})=><RenderItemNowPlaying item={item}/>}
                    />
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <Text style={{color:'white',fontSize:20,margin:10}}>POPULAR</Text>
                    </View>
                    <View style={{flex:0.5,alignItems:'flex-end',justifyContent:'center'}}>
                        <AntDesign name="right" size={25} color="#F09631"/>
                    </View>
                </View>
                <FlatList
                    contentContainerStyle={{paddingHorizontal:10}}
                    style={{maxHeight:250}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={popular}
                    keyExtractor={item=>item.id}
                    renderItem={({item, index})=><RenderItemNowPlaying item={item}/>}
                    />
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <Text style={{color:'white',fontSize:20,margin:10}}>TOP RATED</Text>
                    </View>
                    <View style={{flex:0.5,alignItems:'flex-end',justifyContent:'center'}}>
                        <AntDesign name="right" size={25} color="#F09631"/>
                    </View>
                </View>
                <FlatList
                    contentContainerStyle={{paddingHorizontal:10}}
                    style={{maxHeight:250}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={topRated}
                    keyExtractor={item=>item.id}
                    renderItem={({item, index})=><RenderItemNowPlaying item={item}/>}
                    />
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <Text style={{color:'white',fontSize:20,margin:10}}>UPCOMING</Text>
                    </View>
                    <View style={{flex:0.5,alignItems:'flex-end',justifyContent:'center'}}>
                        <AntDesign name="right" size={25} color="#F09631"/>
                    </View>
                </View>
                <FlatList
                    contentContainerStyle={{paddingHorizontal:10}}
                    style={{maxHeight:250}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={upComing}
                    keyExtractor={item=>item.id}
                    renderItem={({item, index})=><RenderItemNowPlaying item={item}/>}
                    />
                
            </ScrollView>
        </SafeAreaView>
    )
    function RenderItem({item}){
        return(
            <View style={{backgroundColor:"#F09631",alignSelf:'flex-start',margin:5,padding:10,borderRadius:5}}>
                <Text style={{color:'#0F102B',fontWeight:'bold'}}>{item.name}</Text>
            </View>
        )
    }
    
    function RenderItemNowPlaying({item}){
        let tahun=item.release_date.split('-');
        return(
            <ImageBackground source={{uri:'https://image.tmdb.org/t/p/w500'+item.poster_path}} style={{width:150,height:220,marginRight:10,justifyContent:'flex-end'}} resizeMode={"cover"}>
                <Text style={{color:'white',padding:5,backgroundColor:'rgba(0,0,0,0,4)'}} numberOfLines={2} ellipsizeMode={'tail'}>{item.title}</Text>
                <Text style={{backgroundColor:'#F09631',alignSelf:'flex-start',padding:5,position:'absolute',top:5,right:5}}>{item.vote_average}</Text>
                <Text style={{color:'#F09631',backgroundColor:'rgba(0,0,0,0,4)',alignSelf:'flex-start',padding:5,position:'absolute',top:5,left:5}}>{tahun[0]}</Text>
            </ImageBackground>
        )
    }
}

export default Homes;