// assets
// eslint-disable-next-line
import {IconAlignBoxLeftBottom,IconAlignBoxLeftMiddle,IconDashboard,IconEye,IconListCheck,IconMan,IconMarkdown,IconPencil,IconPencilPlus,IconPlus,IconSchool,IconSettings2,IconSettingsAutomation} from '@tabler/icons';

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const SchoolPages = {
  id: 'school',
  title: 'Compnents',
  caption: 'components of school',
  type: 'group',
  children: [
    {
      id: 'school',
      title: 'School',
      type: 'collapse',
      icon: IconSchool,
      children: [
        {
          id: 'add',
          title: 'Add',
          type: 'item',
          url: '/school/add',
          icon: IconPlus
          // breadcrumbs: false
        },
        {
          id: 'view',
          title: 'View',
          type: 'item',
          url: '/school/view',
          icon: IconEye
          // breadcrumbs: false
        }
      ]
    },
    {
      id: 'student',
      title: 'Student',
      type: 'collapse',
      icon: IconMan,
      children: [
        {
          id: 'add',
          title: 'Add',
          type: 'item',
          url: '/student/add',
          icon: IconPlus
          // breadcrumbs: false
        },
        {
          id: 'view',
          title: 'View',
          type: 'item',
          url: '/student/view',
          icon: IconEye
          // breadcrumbs: false
        },
        {
          id: 'promoteClass',
          title: 'PromoteClass',
          type: 'item',
          url: '/student/promote-class',
          icon: IconEye
          // breadcrumbs: false
        },
        {
          id: 'promoteSection',
          title: 'PromoteSection',
          type: 'item',
          url: '/student/promote-section',
          icon: IconEye
          // breadcrumbs: false
        }
      ]
    },
    {
      id: 'teacher',
      title: 'Teacher',
      type: 'collapse',
      icon: IconMan,
      children: [
        {
          id: 'add',
          title: 'Add',
          type: 'item',
          url: '/teacher/add',
          icon: IconPlus
          // breadcrumbs: false
        },
        {
          id: 'view',
          title: 'View',
          type: 'item',
          url: '/teacher/view',
          icon: IconEye
          // breadcrumbs: false
        }
      ]
    },
    {
      id: 'attendance',
      title: 'Attendance',
      type: 'collapse',
      icon: IconPencil,
      children: [
        {
          id: 'Report',
          title: 'Report',
          type: 'item',
          url: '/attendance/report',
          icon: IconAlignBoxLeftBottom
          // breadcrumbs: false
        },
        {
          id: 'view',
          title: 'View',
          type: 'item',
          url: '/attendance/view',
          icon: IconEye
          // breadcrumbs: false
        }
      ]
    },
    {
      id: 'academicSetup',
      title: 'Academic Setup',
      type: 'collapse',
      icon: IconSettingsAutomation,
      children: [
        {
          id: 'setupClass',
          title: 'SetupClass',
          type: 'item',
          url: '/academic-setup/setUp-class',
          icon: IconSettings2
          // breadcrumbs: false
        },
        {
          id: 'class',
          title: 'Class',
          type: 'item',
          url: '/academic-setup/class',
          icon: IconPencilPlus
          // breadcrumbs: false
        },
        {
          id: 'section',
          title: 'Section',
          type: 'item',
          url: '/academic-setup/section',
          icon: IconPencilPlus
          // breadcrumbs: false
        },
        {
          id: 'subject',
          title: 'Subject',
          type: 'item',
          url: '/academic-setup/subject',
          icon: IconPencilPlus
          // breadcrumbs: false
        },
        {
          id: 'subjectAssign',
          title: 'Subject Assign',
          type: 'item',
          url: '/academic-setup/subject-assign',
          icon: IconPencilPlus
          // breadcrumbs: false
        }
      ]
    },
    {
      id: 'markHomework',
      title: 'Mark HomeWork',
      type: 'collapse',
      icon: IconMarkdown,
      children: [
        {
          id: 'MarkHomeWork',
          title: 'Mark Homework',
          type: 'item',
          url: '/mark-homework',
          icon: IconMarkdown
          // breadcrumbs: false
        }
      ]
    },
    {
      id: 'classParticipants',
      title: 'Class Participants',
      type: 'collapse',
      icon: IconMan,
      children: [
        {
          id: 'ClassParticipants',
          title: 'Class Participants',
          type: 'item',
          url: '/class-participants',
          icon: IconMan
          // breadcrumbs: false
        }
      ]
    },
    {
      id: 'examScore',
      title: 'Exam Score',
      type: 'collapse',
      icon: IconAlignBoxLeftMiddle,
      children: [
        {
          id: 'ExamScore',
          title: 'Exam Score',
          type: 'item',
          url: '/exam-score',
          icon: IconAlignBoxLeftMiddle
          // breadcrumbs: false
        }
      ]
    },
    {
      id: 'notebookMarking',
      title: 'Notebook Marking',
      type: 'collapse',
      icon: IconListCheck,
      children: [
        {
          id: 'NotebookMarking',
          title: 'Notebook Marking',
          type: 'item',
          url: '/notebook-marking',
          icon: IconListCheck
          // breadcrumbs: false
        }
      ]
    },
    {
      id: 'teacherObservation',
      title: 'Teacher Observation',
      type: 'collapse',
      icon: IconMan,
      children: [
        {
          id: 'TeacherObservation',
          title: 'Teacher Observation',
          type: 'item',
          url: '/teacher-observation',
          icon: IconMan
          // breadcrumbs: false
        }
      ]
    }
  ]
};

export default SchoolPages;
