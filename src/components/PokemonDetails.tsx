import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IPokemonId } from '../interfaces/PokemonId';
import { GlobalStyles } from '../styles/GlobalStyles';
import { FadeInImage } from './FadeInImage';

interface IProps {
    pokemon: IPokemonId,
    color:string
}

const PokemonDetails = ({pokemon, color}:IProps) => {
    

    const spritesArr = Object.values(pokemon.sprites).filter(sp => sp !== null).splice(0,4);
    
    
  return (
    <ScrollView style={{...StyleSheet.absoluteFillObject}}>
        {/* TYPES */}
        <View style={styles.container}>
            <Text style={styles.title}>Types</Text>
                {
                    pokemon.types.map(({type}) => (
                        <Text>{type.name}</Text>
                    ))
                }
        </View>
        {/* WEIGTH */}
        <View style={styles.separator}>
            <Text style={styles.title}>Weigth</Text>
            <Text style={styles.information}>{pokemon.weight} KG</Text>
        </View>
        {/* SPRITES */}
        <View style={{ marginTop: 20}}>
            <Text style={{...styles.title, marginHorizontal: 20, marginBottom: 10}}>Sprites</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    spritesArr.map((s,i) => (
                        <View style={{marginLeft: 10}}>
                            <FadeInImage style={{...styles.sprite, backgroundColor:color}} uri={s} key={i}/>

                        </View>
                    ))
                }
            </ScrollView>
           
        </View>
         {/* ABILITIES */}
         <View style={styles.separator}>
            <Text style={styles.title}>Habilities</Text>
                {
                    pokemon.abilities.map(({ability}) => <Text>{ability.name}</Text>)
                }
        </View>

         {/* ABILITIES */}
         <View style={styles.separator}>
            <Text style={styles.title}>Stats</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    pokemon.stats.map((stat) => <View style={{...styles.stat, borderColor:color}}>
                        <Text style={{color:color}}>{stat.stat.name.substring(0,12)}</Text>
                        <Text style={{fontSize: 20, color,fontWeight:"bold"}}>{stat.base_stat}</Text>
                    </View>)
                }
            </ScrollView>                
        </View>


        <View style={{marginHorizontal: 40, alignItems:"center"}}>
            <FadeInImage uri={spritesArr[0]} style={{width:100, height:100}}/>
        </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        ...GlobalStyles.globalMargin,
        marginTop: 450,
        width: "90%"
    },
    title: {
        fontSize: 20,
        color:"black"
    },
    information: {
        marginTop: 10
    },
    sprite: {
        width: 110,
        height: 110,
        borderRadius: 100,
    },
    stat:{
        
        width: 100,
        height: 100,
        borderWidth: 2.5,
        borderRadius: 1000,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10,
        marginRight: 10
    },
    separator: {
        marginHorizontal: 20, marginTop: 20
    }
})

export default PokemonDetails