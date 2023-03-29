import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyA3jDlQtCpNSrcca4W0xGR0NVFE2jMmBHE',
	authDomain: 'josedv-web.firebaseapp.com',
	projectId: 'josedv-web',
	storageBucket: 'josedv-web.appspot.com',
	messagingSenderId: '641028636543',
	appId: '1:641028636543:web:16e953072667042ddf644a',
	measurementId: 'G-6NV810MRP0'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
