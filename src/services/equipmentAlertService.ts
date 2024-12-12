import { ExamType } from '../types/exam';
import { sendEquipmentAlert } from './notificationService';

interface EquipmentStatus {
  type: ExamType;
  status: 'ready' | 'in-use' | 'maintenance' | 'offline';
  lastChecked: Date;
}

class EquipmentAlertService {
  private equipmentStatus: Map<ExamType, EquipmentStatus> = new Map();

  constructor() {
    // Initialize default status for all equipment types
    ['mri', 'ct', 'ultrasound', 'xray'].forEach(type => {
      this.equipmentStatus.set(type as ExamType, {
        type: type as ExamType,
        status: 'ready',
        lastChecked: new Date()
      });
    });
  }

  updateEquipmentStatus(type: ExamType, status: EquipmentStatus['status']) {
    const currentStatus = this.equipmentStatus.get(type);
    if (currentStatus?.status !== status) {
      this.equipmentStatus.set(type, {
        type,
        status,
        lastChecked: new Date()
      });

      // Send notification for status changes
      let message = '';
      switch (status) {
        case 'maintenance':
          message = `${type.toUpperCase()} equipment requires maintenance`;
          break;
        case 'offline':
          message = `${type.toUpperCase()} equipment is currently offline`;
          break;
        case 'in-use':
          message = `${type.toUpperCase()} equipment is now in use`;
          break;
        case 'ready':
          message = `${type.toUpperCase()} equipment is ready for use`;
          break;
      }
      
      sendEquipmentAlert(type.toUpperCase(), message);
    }
  }

  getEquipmentStatus(type: ExamType): EquipmentStatus | undefined {
    return this.equipmentStatus.get(type);
  }

  getAllEquipmentStatus(): EquipmentStatus[] {
    return Array.from(this.equipmentStatus.values());
  }
}

export const equipmentAlertService = new EquipmentAlertService();