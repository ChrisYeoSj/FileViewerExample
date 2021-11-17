 'use strict';
 import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
 import RNFS from 'react-native-fs';
 import FileViewer from 'react-native-file-viewer';
 import React from 'react';
 
 const links = [
   {
     //add url link to pdf
     id: 1,
     title: 'PDF',
     link: '',
     fileExtension: 'pdf',
   },
   {
    id: 2,
    title: 'DOC (Word)',
    link: '',
    fileExtension: 'doc',
   },
   {
     id: 6,
     title: 'JPG',
     link: '',
     fileExtension: 'jpg',
   },
   {
     id: 7,
     title: 'PPTx',
     link: '',
     fileExtension: 'pptx',
   },
   {
     id: 8,
     title: 'DOCX (Word)',
     link: '',
     fileExtension: 'docx',
   },
   {
    id: 9,
    title: 'XLSX (Excel)',
    link: '',
    fileExtension: 'xlsx',
  },
  {
    id: 10,
    title: 'SVG',
    link: '',
    fileExtension: 'svg',
  },
 ];

const openFileViaFileViewer = function(url, fileExtension) {
    const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.${fileExtension}`;

    const options = {
    fromUrl: url,
    toFile: localFile
    };
    RNFS.downloadFile(options).promise
    .then(() => FileViewer.open(localFile))
    .then(() => {
        // success
        console.log('success');
    })
    .catch(error => {
        console.log(error);
        console.log('error');
    });
}

 const LinkList = (): Node => (
   <View style={styles.container}>
     {links.map(({id, title, link, fileExtension}) => {
       return (
         <React.Fragment key={id}>
           <View style={styles.separator} />
           <TouchableOpacity
             accessibilityRole={'button'}
             onPress={() => openFileViaFileViewer(link, fileExtension)}
             style={styles.linkContainer}>
             <Text style={styles.link}>{title}</Text>
           </TouchableOpacity>
         </React.Fragment>
       );
     })}
   </View>
 );
 
 const styles = StyleSheet.create({
   container: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   linkContainer: {
     flexWrap: 'wrap',
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     paddingVertical: 8,
   },
   link: {
     flex: 2,
     fontSize: 18,
     fontWeight: '400',
     color: '#0000FF',
   },
   separator: {
     backgroundColor: '#000075',
     height: 1,
   },
 });
 
 export default LinkList;
 