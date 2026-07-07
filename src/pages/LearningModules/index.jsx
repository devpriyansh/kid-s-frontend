import React from 'react';
import { useParams } from 'react-router-dom';
import ActivityPage from './ActivityPage';

// This page is just a wrapper – we directly use ActivityPage with moduleId from URL
// So we can just redirect to ActivityPage, but we keep this for route structure.
// Actually we have route /modules maybe to show list? But we have list in KidHome.
// We'll export ActivityPage as default.
export default ActivityPage;