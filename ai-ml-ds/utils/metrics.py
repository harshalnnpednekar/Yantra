from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, classification_report
import matplotlib.pyplot as plt
import seaborn as sns

def get_classification_metrics(y_true, y_pred):
    """Return a dictionary of common classification metrics."""
    return {
        "accuracy": accuracy_score(y_true, y_pred),
        "f1_weighted": f1_score(y_true, y_pred, average='weighted'),
        "report": classification_report(y_true, y_pred, output_dict=True)
    }

def plot_confusion_matrix(y_true, y_pred, labels, title="Confusion Matrix"):
    """Generate and save a confusion matrix plot."""
    cm = confusion_matrix(y_true, y_pred)
    plt.figure(figsize=(10, 7))
    sns.heatmap(cm, annot=True, fmt='d', xticklabels=labels, yticklabels=labels, cmap='Blues')
    plt.xlabel('Predicted')
    plt.ylabel('Actual')
    plt.title(title)
    # plt.savefig('confusion_matrix.png')
    plt.show()
