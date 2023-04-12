import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const Contacts = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Melissa Girard',
      message: 'Typing...',
      time: '11:56 AM',
      imageUrl:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      uid: 2,
      name: 'Mom',
      message: 'What are you doing tonight?',
      time: '11:44 AM',
      imageUrl:
        'https://st3.depositphotos.com/11585370/19184/i/600/depositphotos_191843146-stock-photo-skeptical-and-dissatisfied-young-brural.jpg',
    },
    {
      uid: 3,
      name: 'Nicholas Fraser',
      message: 'Can we reschedule our meeting?',
      time: '10:19 AM',
      imageUrl:
        'https://thumbs.dreamstime.com/b/studio-portrait-young-sad-pensive-man-blue-shirt-wearing-eyeglasses-touching-his-head-hands-white-background-studio-255833262.jpg',
    },
    {
      uid: 4,
      name: 'Olivia Patel',
      message: 'I need an urgent answer.',
      time: '09:35 AM',
      imageUrl:
        'https://media.istockphoto.com/id/635978276/photo/im-happy-to-share-this-message.jpg?s=612x612&w=0&k=20&c=HwvMLR3EFk6iuZLco73JnFrGi748FouSWYT2zkSOihw=',
    },
    {
      uid: 5,
      name: 'Shirley Michaud',
      message: 'A customer was looking for you...',
      time: '09:08 AM',
      imageUrl:
        'https://us.123rf.com/450wm/goodluz/goodluz1309/goodluz130900270/22073744-portrait-de-beau-mec-avec-des-lunettes.jpg?ver=6',
    },
    {
      uid: 6,
      name: 'Sister',
      message: 'Lets surprise the parents, shall we?',
      time: '08:27 AM',
      imageUrl:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      uid: 7,
      name: 'Jeffrey Grenier',
      message: 'I need your advice as a lawyer',
      time: '08:12 AM',
      imageUrl:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      uid: 8,
      name: 'Khan Ali',
      message: 'Whats going on...',
      time: '11:56 AM',
      imageUrl:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      uid: 9,
      name: 'Mohammed Sadik',
      message: 'Shall we plan for a trip?',
      time: '11:56 AM',
      imageUrl:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      uid: 10,
      name: 'Zabbar Khan',
      message: 'Lets go...',
      time: '11:56 AM',
      imageUrl:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
  ];

  return (
    <View style={styles.contacts}>
      <ScrollView
        style={styles.imageContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {contacts.map(({uid, name, message, time, imageUrl}) => (
          <View key={uid} style={styles.imageCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
          </View>
        ))}
      </ScrollView>

      <View style={styles.detailsContainer}>
        {contacts.map(({uid, name, message, time, imageUrl}) => (
          <View key={uid} style={styles.details}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.detailsImage}
            />
            <View style={styles.textDetails}>
              <View>
                <Text style={styles.textName}>{name}</Text>
                <Text style={styles.textGray}>{message}</Text>
              </View>
              <View>
                <Text style={styles.textGray}>{time}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  contacts: {},
  imageContainer: {
    paddingVertical: 20,
    paddingLeft: 30,
  },
  imageCard: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 12,
    // borderColor: '#000000',
    // borderWidth: 0.5,
  },

  detailsContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    // borderColor: '#000000',
    // borderWidth: 0.5,
    alignItems: 'center',
    marginBottom: 30,
  },
  detailsImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  //   textDetails: {},
  textDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderColor: '#000000',
    // borderWidth: 0.5,
    // width: 120,
    // height: 10,
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  textGray: {
    color: 'gray',
  },
});
