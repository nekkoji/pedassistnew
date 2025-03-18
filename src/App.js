
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './App.css';

import ArmOrientationScreen from './ArmOrientationScreen';
import AssessmentScreen from './AssessmentScreen';
import CongratulatoryScreen from './CongratulatoryScreen';
import EvacuatedTubeScreen from './EvacuatedTubeScreen';
import NeedleAngleScreen from './NeedleAngleScreen';
import PrepareScreen from './PrepareScreen';
import ProfileScreen from './ProfileScreen';
import RetDemScreen from './RetDemScreen';
import SanitizeScreen from './SanitizeScreen';
import StartScreen from './StartScreen';
import WalkthroughScreen from './WalkthroughScreen';
import TieTourniquetScreen from './TieTourniquetScreen';
import TrainingResultsScreen from './TrainingResultsScreen';
import UntieScreen from './UntieScreen';
import VeniScreen from './VeniScreen';
import VideoScreen from './VideoScreen';
import WithdrawScreen from './WithdrawScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/arm-orientation' element={<ArmOrientationScreen />} />
        <Route path='/assessment' element={<AssessmentScreen />} />
        <Route path='/congratulatory' element={<CongratulatoryScreen />} />
        <Route path='/evacuated-tube' element={<EvacuatedTubeScreen />} />
        <Route path='/needle-angle' element={<NeedleAngleScreen />} />
        <Route path='/prepare' element={<PrepareScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/ret-dem' element={<RetDemScreen />} />
        <Route path='/sanitize' element={<SanitizeScreen />} />
        <Route path='/start' element={<StartScreen />} />
        <Route path='/walkthrough/:name' element={<WalkthroughScreen />} />
        <Route path='/tie-tourniquet' element={<TieTourniquetScreen />} />
        <Route path='/training-results' element={<TrainingResultsScreen />} />
        <Route path='/untie' element={<UntieScreen />} />
        <Route path='/venipuncture' element={<VeniScreen />} />
        <Route path='/video-feed' element={<VideoScreen />} />
        <Route path='/withdraw' element={<WithdrawScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
