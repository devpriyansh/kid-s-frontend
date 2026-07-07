import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { KidProvider } from './contexts/KidContext'
import { RewardProvider } from './contexts/RewardContext'
import ProtectedRoute from './components/common/ProtectedRoute'
import RootLayout from './layouts/RootLayout'
import { ClassProvider } from './contexts/ClassContext';
import ClassSelection from './pages/ClassSelection';
import ClassDashboard from './pages/ClassDashboard';
import LessonActivity from './pages/LessonActivity';
import QuizActivity from './pages/QuizActivity';
import ColoringSelection from './pages/ColoringSelection';
import ColoringGame from './pages/ColoringGame';
import MemoryGame from './pages/MemoryGame';
import DragDropGame from './pages/DragDropGame';
import PuzzleGame from './pages/PuzzleGame';
import RainbowSorting from './pages/RainbowSorting';
import LetterBuilder from './pages/LetterBuilder';
import ShadowMatch from './pages/ShadowMatch';
import NumberFishing from './pages/NumberFishing';
import StoryBuilder from './pages/StoryBuilder';
import AITutorPage from './pages/AITutorPage';
import WakeUpLoader from './components/common/WakeUpLoader';
import FunLoader from './components/common/FunLoader';

// Lazy load pages
const Landing = lazy(() => import('./pages/Landing'))
const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const ParentDashboard = lazy(() => import('./pages/ParentDashboard'))
const ChildProfiles = lazy(() => import('./pages/ChildProfiles'))
const KidHome = lazy(() => import('./pages/KidHome'))
const LearningModules = lazy(() => import('./pages/LearningModules'))
const ActivityPage = lazy(() => import('./pages/LearningModules/ActivityPage'))
const Progress = lazy(() => import('./pages/Progress'))
const ProfileSettings = lazy(() => import('./pages/ProfileSettings'))
const Rewards = lazy(() => import('./pages/Rewards'))

function App() {
  return (
    <AuthProvider>
      <KidProvider>
        <RewardProvider>
          <ClassProvider>
            <WakeUpLoader>
              <Suspense fallback={<div className="flex items-center justify-center h-screen w-full"><FunLoader message="Loading..." /></div>}>
                <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              <Route element={<ProtectedRoute />}>
                <Route element={<RootLayout />}>
                  <Route path="/parent-dashboard" element={<ParentDashboard />} />
                  <Route path="/child-profiles" element={<ChildProfiles />} />
                  <Route path="/kid-home" element={<KidHome />} />
                  <Route path="/modules" element={<LearningModules />} />
                  <Route path="/activity/:moduleId" element={<ActivityPage />} />
                  <Route path="/progress" element={<Progress />} />
                  <Route path="/profile-settings" element={<ProfileSettings />} />
                  <Route path="/rewards" element={<Rewards />} />
                  <Route path="/class-selection" element={<ClassSelection />} />
                  <Route path="/class-dashboard" element={<ClassDashboard />} />
                  <Route path="/lesson/:moduleId/:lessonIndex" element={<LessonActivity />} />
                  <Route path="/quiz/:quizId" element={<QuizActivity />} />
                  <Route path="/coloring" element={<ColoringSelection />} />
                  <Route path="/coloring/:id" element={<ColoringGame />} />
                  <Route path="/memory/:quizId" element={<MemoryGame />} />
                  <Route path="/dragdrop/:quizId" element={<DragDropGame />} />
                  <Route path="/puzzle/:quizId" element={<PuzzleGame />} />
                  <Route path="/sorting/:quizId" element={<RainbowSorting />} />
                  <Route path="/letter/:quizId" element={<LetterBuilder />} />
                  <Route path="/shadow/:quizId" element={<ShadowMatch />} />
                  <Route path="/fishing/:quizId" element={<NumberFishing />} />
                  <Route path="/story/:quizId" element={<StoryBuilder />} />
                  <Route path="/ai-tutor" element={<AITutorPage />} />
                </Route>
              </Route>
                            
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
            </WakeUpLoader>
          </ClassProvider>
        </RewardProvider>
      </KidProvider>
    </AuthProvider>
  )
}

export default App