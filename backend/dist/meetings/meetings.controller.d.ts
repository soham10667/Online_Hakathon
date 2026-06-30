import { MeetingsService } from './meetings.service';
import { Response } from 'express';
import { MeetingsGateway } from './meetings.gateway';
export declare class MeetingsController {
    private readonly meetingsService;
    private readonly meetingsGateway;
    constructor(meetingsService: MeetingsService, meetingsGateway: MeetingsGateway);
    createMeeting(req: any, body: {
        title: string;
        description?: string;
        startTime?: string;
        invitedEmails?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string | null;
        title: string;
        description: string | null;
        invitedEmails: string | null;
        status: import(".prisma/client").$Enums.MeetingStatus;
        startTime: Date;
        endTime: Date | null;
        hostId: string;
        channelId: string | null;
    }>;
    getMeetingByCode(code: string): Promise<any>;
    getMeetings(req: any): Promise<({
        _count: {
            actionItems: number;
            transcripts: number;
            risks: number;
        };
        summary: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            meetingId: string;
            overview: string;
            keyTakeaways: string;
            keyDecisions: string | null;
            nextSteps: string | null;
            productivityScore: number;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string | null;
        title: string;
        description: string | null;
        invitedEmails: string | null;
        status: import(".prisma/client").$Enums.MeetingStatus;
        startTime: Date;
        endTime: Date | null;
        hostId: string;
        channelId: string | null;
    })[]>;
    getMeeting(id: string): Promise<{
        actionItems: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.ActionItemStatus;
            meetingId: string;
            text: string;
            assigneeId: string | null;
            assigneeName: string | null;
            dueDate: Date | null;
            externalId: string | null;
            externalUrl: string | null;
            externalPlatform: string | null;
        }[];
        host: {
            id: string;
            email: string;
            name: string;
        };
        transcripts: {
            id: string;
            createdAt: Date;
            meetingId: string;
            timestamp: Date;
            text: string;
            speakerName: string;
            speakerId: string | null;
            translation: string | null;
        }[];
        risks: {
            id: string;
            createdAt: Date;
            status: import(".prisma/client").$Enums.RiskStatus;
            meetingId: string;
            text: string;
            severity: import(".prisma/client").$Enums.RiskSeverity;
        }[];
        summary: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            meetingId: string;
            overview: string;
            keyTakeaways: string;
            keyDecisions: string | null;
            nextSteps: string | null;
            productivityScore: number;
        } | null;
        analytics: {
            id: string;
            createdAt: Date;
            meetingId: string;
            duration: number;
            totalWords: number;
            talkTimeDistribution: string;
            sentimentScore: number;
            engagementScore: number;
            speakerSentiment: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string | null;
        title: string;
        description: string | null;
        invitedEmails: string | null;
        status: import(".prisma/client").$Enums.MeetingStatus;
        startTime: Date;
        endTime: Date | null;
        hostId: string;
        channelId: string | null;
    }>;
    startMeeting(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string | null;
        title: string;
        description: string | null;
        invitedEmails: string | null;
        status: import(".prisma/client").$Enums.MeetingStatus;
        startTime: Date;
        endTime: Date | null;
        hostId: string;
        channelId: string | null;
    }>;
    endMeeting(id: string): Promise<{
        actionItems: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.ActionItemStatus;
            meetingId: string;
            text: string;
            assigneeId: string | null;
            assigneeName: string | null;
            dueDate: Date | null;
            externalId: string | null;
            externalUrl: string | null;
            externalPlatform: string | null;
        }[];
        risks: {
            id: string;
            createdAt: Date;
            status: import(".prisma/client").$Enums.RiskStatus;
            meetingId: string;
            text: string;
            severity: import(".prisma/client").$Enums.RiskSeverity;
        }[];
        summary: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            meetingId: string;
            overview: string;
            keyTakeaways: string;
            keyDecisions: string | null;
            nextSteps: string | null;
            productivityScore: number;
        } | null;
        analytics: {
            id: string;
            createdAt: Date;
            meetingId: string;
            duration: number;
            totalWords: number;
            talkTimeDistribution: string;
            sentimentScore: number;
            engagementScore: number;
            speakerSentiment: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        code: string | null;
        title: string;
        description: string | null;
        invitedEmails: string | null;
        status: import(".prisma/client").$Enums.MeetingStatus;
        startTime: Date;
        endTime: Date | null;
        hostId: string;
        channelId: string | null;
    }>;
    analyzeRealTime(id: string): Promise<{
        actionItems: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.ActionItemStatus;
            meetingId: string;
            text: string;
            assigneeId: string | null;
            assigneeName: string | null;
            dueDate: Date | null;
            externalId: string | null;
            externalUrl: string | null;
            externalPlatform: string | null;
        }[];
        risks: {
            id: string;
            createdAt: Date;
            status: import(".prisma/client").$Enums.RiskStatus;
            meetingId: string;
            text: string;
            severity: import(".prisma/client").$Enums.RiskSeverity;
        }[];
    } | null>;
    syncActionItem(actionItemId: string, platform: 'clickup'): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.ActionItemStatus;
        meetingId: string;
        text: string;
        assigneeId: string | null;
        assigneeName: string | null;
        dueDate: Date | null;
        externalId: string | null;
        externalUrl: string | null;
        externalPlatform: string | null;
    }>;
    updateActionItem(id: string, body: {
        assigneeName?: string;
        status?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.ActionItemStatus;
        meetingId: string;
        text: string;
        assigneeId: string | null;
        assigneeName: string | null;
        dueDate: Date | null;
        externalId: string | null;
        externalUrl: string | null;
        externalPlatform: string | null;
    }>;
    emailMeetingSummary(meetingId: string, req: any): Promise<{
        status: string;
        message: string;
    }>;
    askTwin(id: string, body: {
        question: string;
    }): Promise<{
        answer: string;
        diagram: any;
    }>;
    getFollowupCalendarLink(meetingId: string): Promise<{
        url: string;
    }>;
    exportMeetingPdfView(meetingId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    getMeetingAnalytics(meetingId: string): Promise<{
        meetingId: string;
        duration: number;
        totalWords: number;
        talkTimeDistribution: {};
        sentimentScore: number;
        engagementScore: number;
        speakerSentiment: {};
        createdAt?: undefined;
    } | {
        meetingId: string;
        duration: number;
        totalWords: number;
        talkTimeDistribution: any;
        sentimentScore: number;
        engagementScore: number;
        speakerSentiment: any;
        createdAt: Date;
    }>;
    private buildPdfHtml;
    speak(body: {
        text: string;
        languageCode?: string;
    }): Promise<{
        audioContent: string;
    }>;
    translate(body: {
        text: string;
        sourceLang: string;
        targetLang?: string;
    }): Promise<{
        translatedText: string;
    }>;
}
