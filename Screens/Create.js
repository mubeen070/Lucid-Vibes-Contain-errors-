import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as FaceDetector from 'expo-face-detector';
// import { db } from '../DataBase.js/FirebaseConfig';
// import { addDoc, collection } from 'firebase/firestore';

// async function writeData(formData) {
//   // await setDoc(doc(db, "Students", 'Information'), formData)
//   await addDoc(collection(db, 'Students'), formData)
//     .then(() => {
//       Alert.alert("Success")
//     })
//     .catch((err) => console.log(err))
// }



export default function CameraScreen() {
  useEffect(() => {
    <CameraScreen />
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    department: '',
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    setFormData({
      name: '',
      age: '',
      department: '',
    });
    writeData(formData);

  };
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [isPreview, setIsPreview] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [facesDetected, setFacesDetected] = useState([]);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [isRecording, setIsRecording] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const cameraRef = useRef(null);

  const openCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      setIsCameraOpen(true);
    } else {
      alert('Sorry, we need camera permissions to make this work!');
    }
  };
  const closeCamera = () => {
    setIsCameraOpen(false);
  };
  const handleFacesDetected = ({ faces }) => {
    setFacesDetected(faces);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      setCapturedImage(uri);
      setIsPreview(true);
    }
  };

  const retakePicture = () => {
    setCapturedImage(null);
    setIsPreview(false);
  };

  const toggleCamera = () => {
    setCameraType(
      cameraType === CameraType.back
        ? CameraType.front
        : CameraType.back
    );
  };

  const renderFaceDetection = () => {
    if (facesDetected.length > 0) {
      return (
        <View style={styles.faceDetectionContainer}>
          <Text style={styles.faceDetectionText}>Face Detected!</Text>
        </View>
      );
    }
    return null;
  };
  const toggleFlashMode = () => {
    setFlashMode(current => (current === FlashMode.off ? FlashMode.on : FlashMode.off));
  };
  const recordVideo = async () => {
    if (cameraRef.current && !isRecording) {
      setIsRecording(true);
      const { uri } = await cameraRef.current.recordAsync();
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (cameraRef.current && isRecording) {
      cameraRef.current.stopRecording();
      setIsRecording(false);
    }
  };


  if (isCameraOpen) {
    return (
      <View style={styles.container2}>
        <Camera
          style={styles.camera}
          type={cameraType}
          ref={cameraRef}
          flashMode={flashMode}
          autoFocus={Camera.Constants.AutoFocus.on}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 100,
            tracking: true,
          }}
        >

          <TouchableOpacity style={{ bottom: 500, left: 10 }} onPress={closeCamera}>
            <Ionicons name="close-outline" size={34} color="white" />
          </TouchableOpacity>
          <View style={styles.iconsContainer}>

            <TouchableOpacity onPress={toggleFlashMode} style={styles.iconContainer}>
              <Ionicons
                name={flashMode === FlashMode.off ? 'flash-off' : 'flash'}
                size={30}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCamera} style={styles.iconContainer}>
              <Ionicons
                name="camera-reverse-outline"
                size={30}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={isPreview ? retakePicture : takePicture} style={styles.iconContainer}>
              <Ionicons
                name={isPreview ? 'ios-refresh' : 'radio-button-on'}
                size={50}
                color="white"
              />
            </TouchableOpacity>
            {!isRecording ? ( // Render video recording button or stop recording button based on recording status
              <TouchableOpacity style={styles.iconContainer} onPress={recordVideo}>
                <Ionicons name="videocam" size={64} color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.iconContainer} onPress={stopRecording}>
                <Ionicons name="stop-circle" size={64} color="white" />
              </TouchableOpacity>
            )}

          </View>
        </Camera>
        {
          isPreview && (
            <View style={styles.previewContainer}>
              <Image
                source={{ uri: capturedImage }}
                style={styles.preview}
                useNativeControls
                resizeMode="contain"
              />
            </View>
          )
        }
        {renderFaceDetection()}

      </View >
    );
  }

  return (
    <View style={styles.container} >
      <Text style={styles.header}>Create New Post</Text>


      <View>
        <TextInput
          style={styles.inputs}
          placeholder="Caption"
          value={formData.name}
          onChangeText={(text) => handleChange('Caption', text)}
        />
        <TextInput
          multiline
          numberOfLines={20}
          style={styles.desInput}
          placeholder="Description"
          value={formData.age}
          onChangeText={(text) => handleChange('description', text)}
        />
        <Button title="Upload" />
      </View>
      <TouchableOpacity onPress={openCamera} style={styles.cameraIcon}>
        <Ionicons name='camera-outline' size={45} />
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  container2: {
    width: '100%',
    height: "100%",
  },
  header: {
    fontSize: 24,
    textAlign: 'center'
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  iconContainer: {
    padding: 10,
  },
  previewContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  preview: {
    width: 300,
    height: 400,
    borderRadius: 10,
  },
  faceDetectionContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 5,
    padding: 10,
  },
  faceDetectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  inputs: {
    padding: 10,
    width: 300,
    margin: 6,
    borderWidth: .3,
    borderRadius: 10
  },
  desInput: {
    height: 100,
    width: 300,
    padding: 10,
    margin: 6,
    borderWidth: .3,
    borderRadius: 10
  },
  cameraIcon: {
    bottom: 280,
    left: 150,
  }
});
